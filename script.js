import { exams } from './data/index.js';
console.log('Exams:', exams);
// DOM Elements
const examSelectionPage = document.getElementById('exam-selection');
const examPage = document.getElementById('exam-page');
const examList = document.getElementById('exam-list');
const searchExamInput = document.getElementById('search-exam');
const examTitle = document.getElementById('exam-title');
const currentQuestionEl = document.getElementById('current-question');
const totalQuestionsEl = document.getElementById('total-questions');
const questionText = document.getElementById('question-text');
const questionImageContainer = document.getElementById('question-image-container');
const optionsContainer = document.getElementById('options-container');
const questionGrid = document.getElementById('question-list');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const hintBtn = document.getElementById('hint-btn');
const bookmarkBtn = document.getElementById('bookmark-btn');
const submitExamBtn = document.getElementById('submit-exam');
const resetExamBtn = document.getElementById('reset-exam');
const exitExamBtn = document.getElementById('exit-exam');
const hintPopup = document.getElementById('hint-popup');
const hintText = document.getElementById('hint-text');
const closeHintBtn = document.querySelector('.close-btn');
const loadingSpinner = document.getElementById('loading-spinner');
const resultPopup = document.getElementById('result-popup');
const timeDisplay = document.getElementById('time');
const scoreDisplay = document.getElementById('score');
const totalScoreDisplay = document.getElementById('total-score');
const timeResultDisplay = document.getElementById('time-result');
const resultsContainer = document.getElementById('results-container');
const reviewExamBtn = document.getElementById('review-exam');
const tabButtons = document.querySelectorAll('.tab-btn');

// Khởi tạo state
const appState = {
    currentExam: null,
    currentQuestionIndex: 0,
    userAnswers: {},
    submitted: false,
    bookmarkedQuestions: new Set(),
    startTime: null,
    timerInterval: null
};

// Hiển thị danh sách đề thi
function displayExams(searchTerm = '') {
    try {
        examList.innerHTML = '';
        
        const filteredExams = exams.filter(exam => 
            exam.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
            exam.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
        
        if (filteredExams.length === 0) {
            examList.innerHTML = '<p class="no-results">Không tìm thấy đề thi phù hợp</p>';
            return;
        }
        
        filteredExams.forEach(exam => {
            const examCard = document.createElement('div');
            examCard.className = 'exam-card';
            
const savedAnswers = JSON.parse(localStorage.getItem(`exam_${exam.id}`) || '{}') || {};            const answeredCount = Object.keys(savedAnswers).length;
            
            examCard.innerHTML = `
                <div class="icon">
                    <i class="fas fa-book"></i>
                </div>
                <h3>${exam.title}</h3>
                <p>${exam.description}</p>
                <div class="progress-info">
                    <span>${answeredCount}/${exam.totalQuestions} câu đã làm</span>
                    <div class="progress-bar">
                        <div class="progress" style="width: ${(answeredCount / exam.totalQuestions) * 100}%"></div>
                    </div>
                </div>
                <button class="start-btn">Bắt đầu làm bài</button>
            `;
            
            examCard.querySelector('.start-btn').addEventListener('click', () => startExam(exam.id));
            examList.appendChild(examCard);
        });
    } catch (error) {
        console.error('Lỗi khi hiển thị danh sách đề:', error);
        showAlert('Không thể tải danh sách đề thi. Vui lòng thử lại.');
    }
}

// Bắt đầu làm đề thi
function startExam(examId) {
    try {
        const exam = exams.find(e => e.id === examId);
        if (!exam) throw new Error('Đề thi không tồn tại');

        // Cập nhật state
        appState.currentExam = exam;
        appState.currentQuestionIndex = 0;
        appState.userAnswers = JSON.parse(localStorage.getItem(`exam_${examId}`)) || {};
        appState.submitted = false;
        appState.bookmarkedQuestions = new Set(
            JSON.parse(localStorage.getItem(`bookmarks_${examId}`)) || []
        );
        appState.startTime = new Date();
        
        // Chuyển trang
        examSelectionPage.classList.remove('active');
        examPage.classList.add('active');
        
        // Cập nhật thông tin
        examTitle.textContent = exam.title;
        totalQuestionsEl.textContent = exam.questions.length;
        
        // Bắt đầu timer
        startTimer();
        
        // Hiển thị câu hỏi đầu tiên
        showLoadingSpinner();
        setTimeout(() => {
            hideLoadingSpinner();
            displayQuestion();
            renderQuestionGrid();
        }, 300);
    } catch (error) {
        console.error('Lỗi khi bắt đầu đề thi:', error);
        showAlert('Không thể bắt đầu đề thi. Vui lòng thử lại.');
    }
}

// Timer functions
function startTimer() {
    if (appState.timerInterval) clearInterval(appState.timerInterval);
    appState.startTime = new Date();
    updateTimerDisplay();
    appState.timerInterval = setInterval(updateTimerDisplay, 1000);
}

function updateTimerDisplay() {
    if (!appState.startTime) return;
    
    const now = new Date();
    const diff = now - appState.startTime;
    
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    timeDisplay.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function stopTimer() {
    if (appState.timerInterval) {
        clearInterval(appState.timerInterval);
        appState.timerInterval = null;
    }
}

// Hiển thị câu hỏi
function displayQuestion() {
    try {
        const { currentExam, currentQuestionIndex, userAnswers, submitted, bookmarkedQuestions } = appState;
        const question = currentExam.questions[currentQuestionIndex];
        
        if (!question) throw new Error('Câu hỏi không hợp lệ');

        // Cập nhật thông tin
        currentQuestionEl.textContent = currentQuestionIndex + 1;
        questionText.textContent = question.text;
        questionImageContainer.innerHTML = question.image 
            ? `<img src="${question.image}" alt="Hình câu hỏi" loading="lazy">` 
            : '';
        
        // Hiển thị options
        optionsContainer.innerHTML = '';
question.options.forEach(option => {
    const optionEl = document.createElement('div');
    optionEl.className = 'option';
    
    const isChecked = userAnswers[question.id]?.includes(option.id);
    const inputType = question.multipleAnswers ? 'checkbox' : 'radio';
    
    optionEl.innerHTML = `
        <input type="${inputType}" 
               name="question-${question.id}" 
               id="opt-${question.id}-${option.id}" 
               ${isChecked ? 'checked' : ''}
               ${submitted ? 'disabled' : ''}>
        <span class="option-marker ${inputType === 'checkbox' ? 'checkbox-marker' : 'radio-marker'}"></span>
        <label for="opt-${question.id}-${option.id}">${option.text}</label>
    `;
    
    optionsContainer.appendChild(optionEl);
});
    

        // Cập nhật style ngay lập tức
        updateOptionStyles(question);
        
        // Cập nhật nút điều hướng
        prevBtn.disabled = currentQuestionIndex === 0;
        nextBtn.disabled = currentQuestionIndex === currentExam.questions.length - 1;
        bookmarkBtn.classList.toggle('bookmarked', bookmarkedQuestions.has(question.id));
        
        updateQuestionGrid();
    } catch (error) {
        console.error('Lỗi khi hiển thị câu hỏi:', error);
        showAlert('Không thể hiển thị câu hỏi. Vui lòng thử lại.');
    }
}




// Lưới câu hỏi
function renderQuestionGrid() {
    try {
        questionGrid.innerHTML = '';
        appState.currentExam.questions.forEach((_, index) => {
            const questionNumber = document.createElement('div');
            questionNumber.className = 'question-number';
            questionNumber.textContent = index + 1;
            questionNumber.addEventListener('click', () => goToQuestion(index));
            
            if (appState.bookmarkedQuestions.has(appState.currentExam.questions[index].id)) {
                questionNumber.classList.add('bookmarked');
            }
            
            questionGrid.appendChild(questionNumber);
        });
        
        updateQuestionGrid();
    } catch (error) {
        console.error('Lỗi khi hiển thị lưới câu hỏi:', error);
    }
}

function updateQuestionGrid() {
    try {
        const { currentExam, currentQuestionIndex, userAnswers, submitted } = appState;
        const questionNumbers = questionGrid.querySelectorAll('.question-number');
        
        questionNumbers.forEach((numberEl, index) => {
            numberEl.classList.remove('current', 'answered', 'wrong');
            
            if (index === currentQuestionIndex) {
                numberEl.classList.add('current');
            }
            
            const question = currentExam.questions[index];
            if (userAnswers[question.id]?.length > 0) {
                const userSelected = userAnswers[question.id];
                const correctAnswers = Array.isArray(question.correctAnswer) 
                    ? question.correctAnswer 
                    : [question.correctAnswer];
                
                const isCorrect = userSelected.length === correctAnswers.length && 
                                 userSelected.every(id => correctAnswers.includes(id));
                
                if (submitted) {
                    numberEl.classList.add(isCorrect ? 'answered' : 'wrong');
                } else {
                    numberEl.classList.add('answered');
                }
            }
        });
    } catch (error) {
        console.error('Lỗi khi cập nhật lưới câu hỏi:', error);
    }
}

// Điều hướng
function goToQuestion(index) {
    try {
        if (index < 0 || index >= appState.currentExam.questions.length) return;
        
        appState.currentQuestionIndex = index;
        showLoadingSpinner();
        
        setTimeout(() => {
            hideLoadingSpinner();
            displayQuestion();
        }, 200);
    } catch (error) {
        console.error('Lỗi khi chuyển câu hỏi:', error);
    }
}

// Đánh dấu câu hỏi
function toggleBookmark() {
    const questionId = appState.currentExam.questions[appState.currentQuestionIndex].id;
    
    if (appState.bookmarkedQuestions.has(questionId)) {
        appState.bookmarkedQuestions.delete(questionId);
    } else {
        appState.bookmarkedQuestions.add(questionId);
    }
    
    bookmarkBtn.classList.toggle('bookmarked');
    const questionNumbers = questionGrid.querySelectorAll('.question-number');
    questionNumbers[appState.currentQuestionIndex].classList.toggle('bookmarked');
    
    localStorage.setItem(
        `bookmarks_${appState.currentExam.id}`,
        JSON.stringify(Array.from(appState.bookmarkedQuestions))
    );
}

// Nộp bài
function submitExam() {
    if (confirm("Bạn có chắc chắn muốn nộp bài?")) {
        try {
            appState.submitted = true;
            submitExamBtn.disabled = true;
            stopTimer();
            
            const { currentExam, userAnswers, startTime } = appState;
            let score = 0;
            
            const results = currentExam.questions.map(question => {
                const userSelected = userAnswers[question.id] || [];
                const correctAnswers = Array.isArray(question.correctAnswer) 
                    ? question.correctAnswer 
                    : [question.correctAnswer];
                
                const isCorrect = userSelected.length === correctAnswers.length && 
                                 userSelected.every(id => correctAnswers.includes(id));
                
                if (isCorrect) score++;
                
                return {
                    questionId: question.id,
                    questionText: question.text,
                    userAnswer: userSelected.map(id => 
                        question.options.find(o => o.id === id)?.text || 'Chưa trả lời'
                    ).join(', '),
                    correctAnswer: correctAnswers.map(id => 
                        question.options.find(o => o.id === id)?.text
                    ).join(', '),
                    isCorrect,
                    isBookmarked: appState.bookmarkedQuestions.has(question.id)
                };
            });
            
            showResults(score, results, startTime);
            displayQuestion();
        } catch (error) {
            console.error('Lỗi khi nộp bài:', error);
            showAlert('Không thể nộp bài. Vui lòng thử lại.');
        }
    }
}

// Hiển thị kết quả
function showResults(score, results, startTime) {
    const endTime = new Date();
    const timeDiff = endTime - startTime;
    const hours = Math.floor(timeDiff / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
    const timeString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    scoreDisplay.textContent = score;
    totalScoreDisplay.textContent = appState.currentExam.questions.length;
    timeResultDisplay.textContent = timeString;
    
    filterResults('all', results);
    resultPopup.style.display = 'flex';
}

// Lọc kết quả
function filterResults(tab, results) {
    let filteredResults = [];
    
    switch (tab) {
        case 'all': filteredResults = results; break;
        case 'correct': filteredResults = results.filter(r => r.isCorrect); break;
        case 'wrong': filteredResults = results.filter(r => !r.isCorrect); break;
        case 'bookmarked': filteredResults = results.filter(r => r.isBookmarked); break;
    }
    
    resultsContainer.innerHTML = filteredResults.map(result => `
        <div class="result-item ${result.isCorrect ? 'correct' : 'wrong'}">
            <h4>Câu ${result.questionId}: ${result.questionText}</h4>
            <p><strong>Bạn chọn:</strong> ${result.userAnswer}</p>
            <p><strong>Đáp án đúng:</strong> ${result.correctAnswer}</p>
            ${result.isBookmarked ? '<p><i class="fas fa-bookmark"></i> Đã đánh dấu</p>' : ''}
        </div>
    `).join('');
}

// Làm lại đề
function resetExam() {
    if (confirm("Bạn có muốn làm lại từ đầu? Tất cả câu trả lời sẽ bị xóa.")) {
        try {
            localStorage.removeItem(`exam_${appState.currentExam.id}`);
            localStorage.removeItem(`bookmarks_${appState.currentExam.id}`);
            
            appState.userAnswers = {};
            appState.submitted = false;
            appState.currentQuestionIndex = 0;
            appState.bookmarkedQuestions = new Set();
            appState.startTime = new Date();
            submitExamBtn.disabled = false;
            
            if (appState.timerInterval) clearInterval(appState.timerInterval);
            startTimer();
            
            displayQuestion();
            renderQuestionGrid();
        } catch (error) {
            console.error('Lỗi khi làm lại đề:', error);
        }
    }
}

// Thoát đề
function exitExam() {
    if (confirm("Bạn có muốn thoát? Tiến trình làm bài sẽ được lưu.")) {
        try {
            stopTimer();
            examPage.classList.remove('active');
            examSelectionPage.classList.add('active');
            displayExams();
        } catch (error) {
            console.error('Lỗi khi thoát đề:', error);
        }
    }
}

// Utility functions
function showLoadingSpinner() {
    loadingSpinner.style.display = 'block';
}

function hideLoadingSpinner() {
    loadingSpinner.style.display = 'none';
}

function showAlert(message) {
    alert(message);
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded triggered');
    displayExams();
    
    searchExamInput.addEventListener('input', (e) => {
        displayExams(e.target.value);
    });
});

prevBtn.addEventListener('click', () => goToQuestion(appState.currentQuestionIndex - 1));
nextBtn.addEventListener('click', () => goToQuestion(appState.currentQuestionIndex + 1));
hintBtn.addEventListener('click', showHint);
bookmarkBtn.addEventListener('click', toggleBookmark);
closeHintBtn.addEventListener('click', () => hintPopup.style.display = 'none');
submitExamBtn.addEventListener('click', submitExam);
resetExamBtn.addEventListener('click', resetExam);
exitExamBtn.addEventListener('click', exitExam);
reviewExamBtn.addEventListener('click', () => {
    resultPopup.style.display = 'none';
    appState.submitted = true;
    displayQuestion();
});

tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const results = JSON.parse(resultsContainer.dataset.results || '[]');
        tabButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        filterResults(btn.dataset.tab, results);
    });
});

window.addEventListener('click', (e) => {
    if (e.target === hintPopup) hintPopup.style.display = 'none';
    if (e.target === resultPopup) resultPopup.style.display = 'none';
});

// Helper function
function showHint() {
    try {
        const question = appState.currentExam.questions[appState.currentQuestionIndex];
        hintText.textContent = question.hint || "Không có gợi ý cho câu hỏi này";
        hintPopup.style.display = 'flex';
    } catch (error) {
        console.error('Lỗi khi hiển thị gợi ý:', error);
    }
}
// Thêm hàm mới để cập nhật style option
function updateOptionStyles(question) {
    const options = optionsContainer.querySelectorAll('.option');
    
    options.forEach(option => {
        // Reset classes
        option.classList.remove('correct', 'wrong', 'selected');
        
        const input = option.querySelector('input');
        const optionId = parseInt(input.id.split('-').pop());
        
        // Kiểm tra option có được chọn không
        const isSelected = appState.userAnswers[question.id]?.includes(optionId);
        
        // Kiểm tra option có phải đáp án đúng không
        const isCorrect = Array.isArray(question.correctAnswer) 
            ? question.correctAnswer.includes(optionId)
            : question.correctAnswer === optionId;
        
        // Áp dụng style
        if (isSelected) {
            option.classList.add('selected');
            option.classList.add(isCorrect ? 'correct' : 'wrong');
        }
        
        // Hiển thị đáp án đúng (nếu muốn hiển thị luôn đáp án đúng)
        // if (isCorrect) {
        //     option.classList.add('correct');
        // }
    });
}
// Thêm vào cuối file script.js (thay thế cách cũ xử lý option)
// Thay thế phần xử lý sự kiện click bằng code này
optionsContainer.addEventListener('click', function(e) {
    const optionEl = e.target.closest('.option');
    if (!optionEl || appState.submitted) return;
    
    const input = optionEl.querySelector('input');
    if (!input) return;
    
    const optionId = parseInt(input.id.split('-').pop());
    const questionId = parseInt(input.name.split('-')[1]);
    const question = appState.currentExam.questions.find(q => q.id === questionId);
    
    // Đảo trạng thái checked
    input.checked = !input.checked;
    
    // Cập nhật userAnswers
    if (!appState.userAnswers[questionId]) {
        appState.userAnswers[questionId] = [];
    }
    
    if (question.multipleAnswers) {
        // Xử lý cho multiple answers
        const index = appState.userAnswers[questionId].indexOf(optionId);
        if (input.checked && index === -1) {
            appState.userAnswers[questionId].push(optionId);
        } else if (!input.checked && index !== -1) {
            appState.userAnswers[questionId].splice(index, 1);
        }
    } else {
        // Xử lý cho single answer
        if (input.checked) {
            // Bỏ chọn tất cả các option khác
            document.querySelectorAll(`input[name="question-${questionId}"]`).forEach(otherInput => {
                if (otherInput !== input) {
                    otherInput.checked = false;
                }
            });
            appState.userAnswers[questionId] = [optionId];
        } else {
            appState.userAnswers[questionId] = [];
        }
    }
    
    // Lưu vào localStorage
    localStorage.setItem(`exam_${appState.currentExam.id}`, JSON.stringify(appState.userAnswers));
    
    // Cập nhật giao diện
    updateOptionStyles(question);
    updateQuestionGrid();
});