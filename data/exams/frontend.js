export const frontendExam = {
    id: 3, // ID phải khác với các đề đã có
    title: "Đề mẫu",
    description: "Kiểm tra kiến thức HTML, CSS, JavaScript",
    totalQuestions: 50, // Số câu hỏi thực tế
    questions: [
       
    {
        id: 51,
        text: "Academic journal articles allow us to enter the discussions that define our academic field. However, what is a DISADVANTAGE of academic journal articles?",
        image: "",
        category: "Information Literacy",
        options: [
            { id: 1, text: "They are too general" },
            { id: 2, text: "They are difficult to read because of the expert vocabulary used" },
            { id: 3, text: "They are available on subscription only" },
            { id: 4, text: "They are shorter than textbooks, and therefore contain less information" },
            { id: 5, text: "They are not written by experts" }
        ],
        correctAnswer: 2,
        hint: "Bài báo học thuật thường khó đọc do sử dụng từ vựng chuyên môn cao."
    },
    {
        id: 52,
        text: "Wikipedia is not entirely a reliable information source for academic purposes because:",
        image: "",
        category: "Scholarly Evaluation",
        options: [
            { id: 1, text: "Articles can be poorly structured and confusing" },
            { id: 2, text: "The references are not always credible" },
            { id: 3, text: "Anyone can change the content at any time" },
            { id: 4, text: "As we do not know the author, there's no way we can check whether the information is objective" },
            { id: 5, text: "All of the answers are correct" }
        ],
        correctAnswer: 5,
        hint: "Wikipedia không đáng tin cậy vì tất cả các lý do trên, bao gồm cấu trúc kém, tài liệu tham khảo không đáng tin, và nội dung có thể bị chỉnh sửa bởi bất kỳ ai."
    },
    {
        id: 53,
        text: "'Canada is one of the best countries in the world to live in. First, Canada has an excellent health care system. All Canadians have access to medical services at a reasonable price. Second, Canada has a high standard of education. Students are taught by well-trained teachers and are encouraged to continue studying at university. Finally, Canada's cities are clean and efficiently managed. Canadian cities have many parks and lots of space for people to live. As a result, Canada is a desirable place to live.' In the above paragraph, which sentence is the topic sentence?",
        image: "",
        category: "Writing Skills",
        options: [
            { id: 1, text: "As a result, Canada is a desirable place to live." },
            { id: 2, text: "All Canadians have access to medical services at a reasonable price." },
            { id: 3, text: "Canada is one of the best countries in the world to live in." },
            { id: 4, text: "Canadian cities have many parks and lots of space for people to live." }
        ],
        correctAnswer: 3,
        hint: "Câu chủ đề thường nêu ý chính của đoạn văn, ở đây là câu khẳng định Canada là nơi đáng sống."
    },
    {
        id: 54,
        text: "Some rhetorical reasons of why we research that were mentioned in the lecture include: (Choose all that apply)",
        image: "",
        category: "Research Skills",
        multipleAnswers: true,
        options: [
            { id: 1, text: "We need to find credible sources that support or explain in a clearer and more precise way about certain points that we want to make." },
            { id: 2, text: "We may need to find more details for specific ideas." },
            { id: 3, text: "We research something that we are interested in." },
            { id: 4, text: "We research aspects of the topic or concepts that we don't know." },
            { id: 5, text: "A, B and D" },
            { id: 6, text: "All of above" }
        ],
        correctAnswer: [1, 2, 3, 4],
        hint: "Lý do nghiên cứu bao gồm tìm nguồn đáng tin cậy, chi tiết hóa ý tưởng, nghiên cứu sở thích và tìm hiểu khái niệm mới."
    },
    {
        id: 55,
        text: "What is NOT an academic culture value?",
        image: "",
        category: "Academic Culture",
        options: [
            { id: 1, text: "Lifelong Learning" },
            { id: 2, text: "Intellectual autonomy" },
            { id: 3, text: "Problem solving" },
            { id: 4, text: "Empathic Listening" }
        ],
        correctAnswer: 4,
        hint: "Lắng nghe đồng cảm không phải là giá trị cốt lõi của văn hóa học thuật."
    },
    {
        id: 56,
        text: "As a leader of a group, you should not:",
        image: "",
        category: "Leadership Skills",
        options: [
            { id: 1, text: "Use assertion more often than proposal" },
            { id: 2, text: "Connect team members to achieve the groupwork's goals" },
            { id: 3, text: "Know how to listen" },
            { id: 4, text: "Take in account opinions of every teammate" }
        ],
        correctAnswer: 1,
        hint: "Lãnh đạo nhóm nên sử dụng đề xuất thay vì áp đặt ý kiến."
    },
    {
        id: 57,
        text: "Which is NOT a way to help achieving cohesion in your writing?",
        image: "",
        category: "Writing Skills",
        options: [
            { id: 1, text: "Cohesion can be achieved by using chains of word from the same word family, using words with similar meanings and also by using pronouns to refer back to other parts of the text." },
            { id: 2, text: "Understanding the information structure of sentences using the idea of theme." },
            { id: 3, text: "One way to achieve cohesion in a paragraph is through the use of words and phrases for conjunction." },
            { id: 4, text: "Using passive voice is a way to improve your writing and make it more cohesive." }
        ],
        correctAnswer: 4,
        hint: "Giọng bị động không trực tiếp góp phần tạo sự mạch lạc trong văn viết."
    },
    {
        id: 58,
        text: "Vietnamese government recently launched a program on government investment, switching 08 projects from PPP method to direct government investment. Discuss how this investment should affect Vietnamese economy, given the impact of Covid-19. What kind of task is this?",
        image: "",
        category: "Analytical Skills",
        options: [
            { id: 1, text: "Analytical task" },
            { id: 2, text: "Simple task" }
        ],
        correctAnswer: 1,
        hint: "Nhiệm vụ yêu cầu thảo luận và phân tích tác động kinh tế, do đó là nhiệm vụ phân tích."
    },
    {
        id: 59,
        text: "Brick's definition of academic culture:",
        image: "",
        category: "Academic Culture",
        options: [
            { id: 1, text: "as the attitudes, values, and ways of behaving that are shared by a group of people who work or study in universities, is a useful one." },
            { id: 2, text: "as the attitudes and ways of behaving that are shared by a group of people who work or study in universities, is a useful one." },
            { id: 3, text: "values, and ways of behaving that are shared by a group of people who work or study in universities, is a useful one." },
            { id: 4, text: "ways of behaving that are shared by a group of people who work or study in universities, is a useful one." }
        ],
        correctAnswer: 1,
        hint: "Định nghĩa đầy đủ của Brick bao gồm thái độ, giá trị và cách hành xử trong môi trường đại học."
    },
    {
        id: 60,
        text: "A Brick's approach when facing an analytical problem should consist of the following steps, respectively:",
        image: "",
        category: "Problem Solving",
        options: [
            { id: 1, text: "Identify problem, evaluate solution, identify solution" },
            { id: 2, text: "Identify solution, evaluate solution, identify problem" },
            { id: 3, text: "Identify problem, identify solution, evaluate solution" },
            { id: 4, text: "Identify problem, evaluate problem, identify solution, evaluate solution" }
        ],
        correctAnswer: 3,
        hint: "Phương pháp của Brick là xác định vấn đề, tìm giải pháp, sau đó đánh giá giải pháp."
    },
    {
        id: 61,
        text: "What is digital literacy?",
        image: "",
        category: "Information Literacy",
        options: [
            { id: 1, text: "An individual's ability to find, evaluate and clearly communicate information on digital platforms" },
            { id: 2, text: "An individual's ability to find and evaluate information found in hard copy books" },
            { id: 3, text: "An individual's ability to avoid plagiarism" },
            { id: 4, text: "An individual's ability to search information in hard copy books" }
        ],
        correctAnswer: 1,
        hint: "Kỹ năng số liên quan đến việc tìm kiếm, đánh giá và truyền đạt thông tin trên các nền tảng số."
    },
    {
        id: 62,
        text: "Have a look at the following argument based on an advertisement. What are the implicit premises? 'There are many young, beautiful people on the beach having fun. They are drinking Bailey cocktail. You should buy Bailey cocktail.' (Check 2 options)",
        image: "",
        category: "Argument Analysis",
        multipleAnswers: true,
        options: [
            { id: 1, text: "That if you buy Bailey cocktail, you will also be young, beautiful, and happy" },
            { id: 2, text: "That the young people are hired to pretend to have fun with Bailey cocktail" },
            { id: 3, text: "That Bailey cocktail should only be drunk on the beach" },
            { id: 4, text: "That Bailey cocktail makes the young, beautiful people in the advertisement happy" }
        ],
        correctAnswer: [1, 4],
        hint: "Tiền đề ngầm hiểu là uống Bailey cocktail sẽ mang lại niềm vui và sự hấp dẫn như trong quảng cáo."
    },
    {
        id: 63,
        text: "The introduction of an essay has three main functions. What are they? (Choose 3 options)",
        image: "",
        category: "Writing Skills",
        multipleAnswers: true,
        options: [
            { id: 1, text: "It's a map." },
            { id: 2, text: "It's a cover." },
            { id: 3, text: "It's a background information." },
            { id: 4, text: "It's a microcosm." },
            { id: 5, text: "It's a marketing tool." }
        ],
        correctAnswer: [1, 3, 5],
        hint: "Phần giới thiệu cung cấp lộ trình, thông tin nền và thu hút sự chú ý của người đọc."
    },
    {
        id: 64,
        text: "Which is NOT a proposal when participating in Group Work?",
        image: "",
        category: "Collaboration Skills",
        options: [
            { id: 1, text: "\"We could start by searching for the information.\"" },
            { id: 2, text: "\"Why don’t we ask for more instruction from the lecturer?\"" },
            { id: 3, text: "\"The first thing to do is to create a plan.\"" },
            { id: 4, text: "\"How about presenting our outline for lecturer’s feedback?\"" }
        ],
        correctAnswer: 2,
        hint: "Đề xuất trong làm việc nhóm thường là gợi ý hành động, không phải câu hỏi xin hướng dẫn."
    },
    {
        id: 65,
        text: "Which of the following does NOT belong to the list of critical thinking dispositions according to Facione et al.?",
        image: "",
        category: "Critical Thinking",
        options: [
            { id: 1, text: "Inquisitiveness" },
            { id: 2, text: "Truth-seeking" },
            { id: 3, text: "Self-confidence" },
            { id: 4, text: "Responsibility" },
            { id: 5, text: "Maturity" }
        ],
        correctAnswer: 4,
        hint: "Theo Facione, các phẩm chất tư duy phản biện không bao gồm 'trách nhiệm'."
    },
    {
        id: 66,
        text: "Why can't we rely just on school books as information sources at university?",
        image: "",
        category: "Information Literacy",
        options: [
            { id: 1, text: "Because they are not written by experts." },
            { id: 2, text: "Because they don't provide deep knowledge of a subject." },
            { id: 3, text: "Because they are sometimes wrong." },
            { id: 4, text: "None of the above." }
        ],
        correctAnswer: 2,
        hint: "Sách giáo khoa cung cấp kiến thức cơ bản nhưng thiếu chiều sâu so với yêu cầu đại học."
    },
    {
        id: 67,
        text: "Consider the following rhetorical situation. A student is having some financial difficulties and needs to work full-time and save money. ... At the end of the consultation the student goes away to consider their options. Based on this information, which of the following can be considered social and political influences on this rhetorical situation? (Check two options)",
        image: "",
        category: "Rhetorical Skills",
        multipleAnswers: true,
        options: [
            { id: 1, text: "Class differences between the student and the administrative staff member" },
            { id: 2, text: "The marketization of universities which leads to administrative areas such as this resembling more commercial spaces" },
            { id: 3, text: "Unionization of administrative staff members" },
            { id: 4, text: "A lack of financial support for students" }
        ],
        correctAnswer: [2, 4],
        hint: "Ảnh hưởng xã hội và chính trị bao gồm tính thương mại hóa của đại học và thiếu hỗ trợ tài chính."
    },
    {
        id: 68,
        text: "Below is an original quote from the Noda et al. article, and also the direct quote as used in a student's essay. Original quote: 'Recently robot-assisted surgery has broadened its application and has been introduced into the surgical theaters worldwide.' (Noda et al., 2013, pg 1) Student's writing: 'Another important innovation has been the advent of robotic surgery, which Noda et al. (2013, pg 1) write \"has been ... introduced into surgical theaters worldwide.\"' Has the student used the quote correctly or incorrectly? (Refer to 4.3a)",
        image: "",
        category: "Academic Integrity",
        options: [
            { id: 1, text: "The student's use of the quote is correct." },
            { id: 2, text: "The student's use of the quote is incorrect because they have put the in-text citation in the wrong place." },
            { id: 3, text: "The student's use of the quote is incorrect because they should have capitalized the 'h' in \"has.\"" },
            { id: 4, text: "The student's use of the quote is incorrect because they shouldn't have used ellipses." }
        ],
        correctAnswer: 4,
        hint: "Sử dụng dấu chấm lửng không cần thiết khi trích dẫn, vì câu trích dẫn đã đầy đủ."
    },
    {
        id: 69,
        text: "Cultural background affects how individuals communicate and how they interpret messages from others.",
        image: "",
        category: "Communication Skills",
        options: [
            { id: 1, text: "True" },
            { id: 2, text: "False" }
        ],
        correctAnswer: 1,
        hint: "Nền văn hóa ảnh hưởng đến cách giao tiếp và diễn giải thông điệp."
    },
    {
        id: 70,
        text: "Eating ice cream makes you more likely to be attacked by a shark is an example of",
        image: "",
        category: "Critical Thinking",
        options: [
            { id: 1, text: "hasty generalization." },
            { id: 2, text: "a cause-effect relationship." },
            { id: 3, text: "Ad Hominem Fallacy" },
            { id: 4, text: "circular argument" }
        ],
        correctAnswer: 1,
        hint: "Kết luận vội vàng (hasty generalization) khi liên kết ăn kem với bị cá mập tấn công mà không có bằng chứng."
    },
    {
        id: 71,
        text: "In the course Critical Thinking Skills for University Success, part Academic Culture, which of the following statements about lecturers is true?",
        image: "",
        category: "Academic Culture",
        options: [
            { id: 1, text: "Lecturers are considered as facilitators rather than teachers." },
            { id: 2, text: "Lecturers are considered as friends and coworkers of students." },
            { id: 3, text: "Lecturers are expected to always be there to hold the student's hand and guide them on studying and researching." },
            { id: 4, text: "Lecturers are similar to high school teachers." }
        ],
        correctAnswer: 1,
        hint: "Giảng viên đại học đóng vai trò người hỗ trợ học tập hơn là giáo viên truyền thống."
    },
    {
        id: 72,
        text: "Taking notes during lectures is an effective way that helps students get the most out of their courses. So, what should students note down?",
        image: "",
        category: "Learning Strategies",
        options: [
            { id: 1, text: "As much as possible" },
            { id: 2, text: "Main ideas, Processes, Formulas, Arguments" },
            { id: 3, text: "All information out of the textbook" },
            { id: 4, text: "Questions for lecturer/tutor" },
            { id: 5, text: "B and D" },
            { id: 6, text: "All of above" }
        ],
        correctAnswer: 5,
        hint: "Ghi chú nên tập trung vào ý chính, quy trình, công thức, lập luận và câu hỏi cho giảng viên."
    },
    {
        id: 73,
        text: "Why should you take notes during lectures?",
        image: "",
        category: "Learning Strategies",
        options: [
            { id: 1, text: "Taking notes helps you systemize knowledge you studied" },
            { id: 2, text: "Taking notes helps you memorize important knowledge" },
            { id: 3, text: "Taking notes helps you with your exams as you know which parts of lectures to focus on" },
            { id: 4, text: "All of the answers are correct" }
        ],
        correctAnswer: 4,
        hint: "Ghi chú hỗ trợ hệ thống hóa kiến thức, ghi nhớ và chuẩn bị tốt cho kỳ thi."
    },
    {
        id: 74,
        text: "What are the three parts to a problem?",
        image: "",
        category: "Problem Solving",
        options: [
            { id: 1, text: "The initial state, solution path, and goal" },
            { id: 2, text: "The solution, the path, and the goal" },
            { id: 3, text: "The questioner, the question, and the answer" },
            { id: 4, text: "The initial state, solution path, and the question" },
            { id: 5, text: "All of the answers are incorrect" }
        ],
        correctAnswer: 1,
        hint: "Một vấn đề bao gồm trạng thái ban đầu, lộ trình giải pháp và mục tiêu."
    },
    {
        id: 75,
        text: "According to the lecture, why do people often ignore the first step of Polya's problem-solving process?",
        image: "",
        category: "Problem Solving",
        options: [
            { id: 1, text: "They think it's unnecessary." },
            { id: 2, text: "People often jump straight into solving the problem without really figuring out if they understand what the real problem is." },
            { id: 3, text: "It's too difficult to work on." },
            { id: 4, text: "The step itself is not ignorable." }
        ],
        correctAnswer: 2,
        hint: "Mọi người thường bỏ qua bước xác định vấn đề vì vội vàng tìm giải pháp."
    },
    {
        id: 76,
        text: "Which of the following is NOT a component of basic essay structure?",
        image: "",
        category: "Writing Skills",
        options: [
            { id: 1, text: "Introduction" },
            { id: 2, text: "Body" },
            { id: 3, text: "Conclusion" },
            { id: 4, text: "Main statement" }
        ],
        correctAnswer: 4,
        hint: "Cấu trúc bài luận cơ bản không bao gồm 'main statement' mà gồm mở bài, thân bài và kết luận."
    },
    {
        id: 77,
        text: "You are doing an assignment on media representations of women in business. Where would be a good place to begin your search? (Choose 3 options)",
        image: "",
        category: "Research Skills",
        multipleAnswers: true,
        options: [
            { id: 1, text: "Google" },
            { id: 2, text: "Library aggregated search" },
            { id: 3, text: "YouTube" },
            { id: 4, text: "An academic database entitled, \"Communication Source, Focussing on Media Studies\"." },
            { id: 5, text: "An academic database called JSTOR, which has journal articles from fields such as film studies and literature, sociology and more." }
        ],
        correctAnswer: [1, 2, 3],
        hint: "Bắt đầu tìm kiếm trên Google, công cụ tìm kiếm thư viện và YouTube để có cái nhìn tổng quan."
    },
    {
        id: 78,
        text: "Which of the following is NOT a criterion used to judge the credibility of sources?",
        image: "",
        category: "Scholarly Evaluation",
        options: [
            { id: 1, text: "Clarity" },
            { id: 2, text: "Scholarly purpose" },
            { id: 3, text: "Audience" },
            { id: 4, text: "Objectivity" }
        ],
        correctAnswer: 1,
        hint: "Tính rõ ràng không phải là tiêu chí chính để đánh giá độ tin cậy của nguồn."
    },
    {
        id: 79,
        text: "Which of these Twitter bios is best?",
        image: "",
        category: "Digital Literacy",
        options: [
            { id: 1, text: "Passionate pop culture enthusiast. Social media junkie. Avid blogger. Retweets do not mean endorsements." },
            { id: 2, text: "I am a researcher focusing on the DNA of earthworms and trying to apply their genetic adaptations to use with human DNA." },
            { id: 3, text: "Creative. Dynamic. Motivated." },
            { id: 4, text: "A mum and a wife with a cool day job writing children's books." }
        ],
        correctAnswer: 4,
        hint: "Bio Twitter tốt nhất là cụ thể, gần gũi và thể hiện vai trò nghề nghiệp rõ ràng."
    },
    {
        id: 80,
        text: "Imagine you are writing the first essay for a cultural studies unit on Modernism (CSTU1004). The topic is on the influence of the First World War. Your lecturer's name is Associate Professor Di Jones. The date today is 5th December 2017 and it is due on the 10th December 2017. What would be the best name for a draft of this essay, according to lesson 3.3a?",
        image: "",
        category: "File Management",
        options: [
            { id: 1, text: "171210_Assignment1_CSTU1004" },
            { id: 2, text: "171210_Jones_Assignment1" },
            { id: 3, text: "171205_CSTU1004_Assignment1" }
        ],
        correctAnswer: 1,
        hint: "Tên file nên bao gồm ngày nộp, mã môn học và số thứ tự bài tập để dễ quản lý."
    },
     {
        id: 81,
        text: "What is the first step in the process of problem solving according to Polya?",
        image: "",
        category: "Problem Solving",
        options: [
            { id: 1, text: "Devise a plan" },
            { id: 2, text: "Understand the problem" },
            { id: 3, text: "Carry out the plan" },
            { id: 4, text: "Look back" }
        ],
        correctAnswer: 2,
        hint: "Bước đầu tiên của Polya là hiểu rõ vấn đề trước khi lập kế hoạch."
    },
    {
        id: 82,
        text: "Which of the following is an example of a primary source?",
        image: "",
        category: "Information Literacy",
        options: [
            { id: 1, text: "A review article summarizing recent studies" },
            { id: 2, text: "A diary written by a historical figure" },
            { id: 3, text: "A textbook on biology" },
            { id: 4, text: "An encyclopedia entry" }
        ],
        correctAnswer: 2,
        hint: "Nguồn sơ cấp là tài liệu gốc, như nhật ký, không phải tài liệu tổng hợp."
    },
    {
        id: 83,
        text: "Which of the following is a key component of academic integrity?",
        image: "",
        category: "Academic Integrity",
        options: [
            { id: 1, text: "Submitting work done by others as your own" },
            { id: 2, text: "Properly citing sources" },
            { id: 3, text: "Using unverified sources" },
            { id: 4, text: "Copying answers during an exam" }
        ],
        correctAnswer: 2,
        hint: "Trích dẫn nguồn đúng cách là một phần quan trọng của tính trung thực học thuật."
    },
    {
        id: 84,
        text: "What are effective ways to avoid plagiarism? (Choose 3 options)",
        image: "",
        category: "Academic Integrity",
        multipleAnswers: true,
        options: [
            { id: 1, text: "Paraphrasing and citing the source" },
            { id: 2, text: "Copying text without citation" },
            { id: 3, text: "Using quotation marks for direct quotes" },
            { id: 4, text: "Submitting someone else’s work" },
            { id: 5, text: "Including a reference list" }
        ],
        correctAnswer: [1, 3, 5],
        hint: "Tránh đạo văn bằng cách diễn giải và trích dẫn, sử dụng dấu ngoặc kép cho trích dẫn trực tiếp và cung cấp danh sách tài liệu tham khảo."
    },
    {
        id: 85,
        text: "Which of the following is NOT a characteristic of scholarly articles?",
        image: "",
        category: "Scholarly Evaluation",
        options: [
            { id: 1, text: "Written by experts in the field" },
            { id: 2, text: "Peer-reviewed" },
            { id: 3, text: "Published on social media platforms" },
            { id: 4, text: "Includes a reference list" }
        ],
        correctAnswer: 3,
        hint: "Bài báo học thuật không được xuất bản trên mạng xã hội mà thường trên các tạp chí chuyên ngành."
    },
    {
        id: 86,
        text: "What is the purpose of a thesis statement in an essay?",
        image: "",
        category: "Writing Skills",
        options: [
            { id: 1, text: "To summarize the entire essay" },
            { id: 2, text: "To present the main argument or point" },
            { id: 3, text: "To list all references used" },
            { id: 4, text: "To provide background information" }
        ],
        correctAnswer: 2,
        hint: "Luận điểm chính (thesis statement) nêu rõ lập luận hoặc ý chính của bài luận."
    },
    {
        id: 87,
        text: "Which of the following is a benefit of teamwork in a university setting? (Choose 2 options)",
        image: "",
        category: "Collaboration Skills",
        multipleAnswers: true,
        options: [
            { id: 1, text: "Diverse perspectives enhance problem-solving" },
            { id: 2, text: "Increases individual workload" },
            { id: 3, text: "Encourages sharing of ideas and resources" },
            { id: 4, text: "Reduces communication skills" }
        ],
        correctAnswer: [1, 3],
        hint: "Làm việc nhóm mang lại góc nhìn đa dạng và khuyến khích chia sẻ ý tưởng."
    },
    {
        id: 88,
        text: "What is the main purpose of a literature review in a research paper?",
        image: "",
        category: "Research Skills",
        options: [
            { id: 1, text: "To summarize the researcher’s personal opinions" },
            { id: 2, text: "To provide a comprehensive overview of existing research" },
            { id: 3, text: "To list all sources without analysis" },
            { id: 4, text: "To present the researcher’s methodology" }
        ],
        correctAnswer: 2,
        hint: "Tổng quan tài liệu cung cấp cái nhìn toàn diện về các nghiên cứu hiện có."
    },
    {
        id: 89,
        text: "Which of the following actions could be considered academic misconduct?",
        image: "",
        category: "Academic Integrity",
        options: [
            { id: 1, text: "Submitting a paper written by someone else" },
            { id: 2, text: "Citing a source correctly" },
            { id: 3, text: "Paraphrasing with proper attribution" },
            { id: 4, text: "Using your own previous work with permission" }
        ],
        correctAnswer: 1,
        hint: "Nộp bài do người khác viết là hành vi vi phạm học thuật."
    },
    {
        id: 90,
        text: "What is the role of critical thinking in academic writing?",
        image: "",
        category: "Critical Thinking",
        options: [
            { id: 1, text: "To accept all sources at face value" },
            { id: 2, text: "To evaluate evidence and arguments objectively" },
            { id: 3, text: "To avoid using any sources" },
            { id: 4, text: "To focus only on personal opinions" }
        ],
        correctAnswer: 2,
        hint: "Tư duy phản biện giúp đánh giá bằng chứng và lập luận một cách khách quan."
    },
    {
        id: 91,
        text: "Which of the following is a good practice for managing time effectively at university? (Choose 2 options)",
        image: "",
        category: "Time Management",
        multipleAnswers: true,
        options: [
            { id: 1, text: "Creating a study schedule" },
            { id: 2, text: "Procrastinating on assignments" },
            { id: 3, text: "Prioritizing tasks based on deadlines" },
            { id: 4, text: "Ignoring feedback from lecturers" }
        ],
        correctAnswer: [1, 3],
        hint: "Lập lịch học tập và ưu tiên nhiệm vụ theo thời hạn là cách quản lý thời gian hiệu quả."
    },
    {
        id: 92,
        text: "What is NOT a recommended strategy for effective note-taking?",
        image: "",
        category: "Learning Strategies",
        options: [
            { id: 1, text: "Writing down every word the lecturer says" },
            { id: 2, text: "Summarizing key points" },
            { id: 3, text: "Using abbreviations and symbols" },
            { id: 4, text: "Organizing notes by topic" }
        ],
        correctAnswer: 1,
        hint: "Ghi chép mọi từ không hiệu quả, nên tập trung vào tóm tắt và tổ chức ý chính."
    },
    {
        id: 93,
        text: "What is the purpose of using transition words in writing?",
        image: "",
        category: "Writing Skills",
        options: [
            { id: 1, text: "To increase word count" },
            { id: 2, text: "To improve coherence and flow" },
            { id: 3, text: "To replace citations" },
            { id: 4, text: "To summarize the conclusion" }
        ],
        correctAnswer: 2,
        hint: "Từ nối giúp cải thiện sự mạch lạc và dòng chảy của bài viết."
    },
    {
        id: 94,
        text: "Which of the following is a characteristic of a reliable source?",
        image: "",
        category: "Scholarly Evaluation",
        options: [
            { id: 1, text: "Published on a personal blog" },
            { id: 2, text: "Peer-reviewed by experts" },
            { id: 3, text: "Lacking citations" },
            { id: 4, text: "Based on opinions rather than evidence" }
        ],
        correctAnswer: 2,
        hint: "Nguồn đáng tin cậy thường được thẩm định bởi các chuyên gia."
    },
    {
        id: 95,
        text: "What is an example of a logical fallacy in an argument?",
        image: "",
        category: "Critical Thinking",
        options: [
            { id: 1, text: "Providing statistical evidence" },
            { id: 2, text: "Attacking the person instead of the argument" },
            { id: 3, text: "Citing a scholarly article" },
            { id: 4, text: "Using a clear thesis statement" }
        ],
        correctAnswer: 2,
        hint: "Ngụy biện ad hominem tấn công cá nhân thay vì phản bác lập luận."
    },
    {
        id: 96,
        text: "Which of the following is a benefit of attending tutorials? (Choose 2 options)",
        image: "",
        category: "Learning Strategies",
        multipleAnswers: true,
        options: [
            { id: 1, text: "Opportunity to clarify concepts" },
            { id: 2, text: "Increased isolation from peers" },
            { id: 3, text: "Engaging in discussions with peers" },
            { id: 4, text: "Memorizing the textbook" }
        ],
        correctAnswer: [1, 3],
        hint: "Buổi hướng dẫn giúp làm rõ khái niệm và thảo luận với bạn học."
    },
    {
        id: 97,
        text: "What is the purpose of a reference list in an academic paper?",
        image: "",
        category: "Academic Integrity",
        options: [
            { id: 1, text: "To increase the word count" },
            { id: 2, text: "To give credit to original authors" },
            { id: 3, text: "To summarize the paper’s content" },
            { id: 4, text: "To replace in-text citations" }
        ],
        correctAnswer: 2,
        hint: "Danh sách tài liệu tham khảo ghi nhận công lao của các tác giả gốc."
    },
    {
        id: 98,
        text: "Which of the following is NOT a good practice for group work?",
        image: "",
        category: "Collaboration Skills",
        options: [
            { id: 1, text: "Assigning clear roles to team members" },
            { id: 2, text: "Ignoring team members’ contributions" },
            { id: 3, text: "Setting regular meetings" },
            { id: 4, text: "Communicating openly" }
        ],
        correctAnswer: 2,
        hint: "Bỏ qua đóng góp của thành viên nhóm không phải là thực hành tốt."
    },
    {
        id: 99,
        text: "What is the main goal of a peer review process?",
        image: "",
        category: "Scholarly Evaluation",
        options: [
            { id: 1, text: "To publish as many articles as possible" },
            { id: 2, text: "To ensure the quality and validity of research" },
            { id: 3, text: "To promote the author’s reputation" },
            { id: 4, text: "To summarize the research for the public" }
        ],
        correctAnswer: 2,
        hint: "Thẩm định ngang hàng đảm bảo chất lượng và tính hợp lệ của nghiên cứu."
    },
    {
        id: 100,
        text: "What is a key strategy for effective communication in a group project?",
        image: "",
        category: "Communication Skills",
        options: [
            { id: 1, text: "Avoiding feedback from others" },
            { id: 2, text: "Listening actively to team members" },
            { id: 3, text: "Dominating discussions" },
            { id: 4, text: "Working independently without consultation" }
        ],
        correctAnswer: 2,
        hint: "Lắng nghe tích cực là chiến lược quan trọng để giao tiếp hiệu quả trong dự án nhóm."
    }

        // Thêm các câu hỏi khác...
    ]
};
   