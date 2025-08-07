export const ssl101cExam = {
    
    
        id: 2,
        title: "Đề mẫu",
        description: "Đề thi thử Backend cơ bản",
        totalQuestions: 50,
        questions: [
            {
                id: 1,
                text: "A conclusion should..........",
                image: "images/question1.jpg",
                category: "Basic Concepts",
                options: [
                    { id: 1, text: "summarize the main idea." },
                    { id: 2, text: "bring up any additional points that you forgot to include in the introduction." },
                    { id: 3, text: "help readers understand how the material is organized." },
                    { id: 4, text: "All of the answers are correct" }
                ],
                correctAnswer: 4,
                hint: "Kết luận thường tóm tắt ý chính và có thể bao gồm tất cả các yếu tố liên quan."
            },
            {
                id: 2,
                text: "Which record is an article on positive topological entropy in the journal Annals of Mathematics part of?",
                image: "images/question2.jpg",
                category: "Scholarly Records",
                options: [
                    { id: 1, text: "Cultural record" },
                    { id: 2, text: "Scholarly record" },
                    { id: 3, text: "Public record" },
                    { id: 4, text: "Police record" }
                ],
                correctAnswer: 2,
                hint: "Bài báo học thuật thường thuộc về hồ sơ học thuật (scholarly record)."
            },
            {
                id: 3,
                text: "When students plagiarize without intending to do so, usually because of",
                image: "images/question3.jpg",
                category: "Academic Integrity",
                options: [
                    { id: 1, text: "a poor ability to reference or a poor understanding of referencing." },
                    { id: 2, text: "them paying other people to sit exams or write assignments." },
                    { id: 3, text: "them deliberately plagiarizing others' work." },
                    { id: 4, text: "them deliberately copying someone else's work with the intention of deceiving the markers into thinking it's their own work." }
                ],
                correctAnswer: 1,
                hint: "Đạo văn không chủ ý thường do thiếu kỹ năng trích dẫn hoặc hiểu biết kém về trích dẫn."
            },
            {
                id: 4,
                text: "Drawing on ideas and knowledge from different fields is a useful way to solve problem because:",
                image: "images/question4.jpg",
                category: "Problem Solving",
                options: [
                    { id: 1, text: "It can trigger new ways of thinking about the problem" },
                    { id: 2, text: "it can narrow your knowledge in the field of your major" },
                    { id: 3, text: "It can stimulate creative ways to solve the problem by combining knowledge of different fields" },
                    { id: 4, text: "It can divert your attention and eventually, you will study a different field" },
                    { id: 5, text: "A and C" }
                ],
                correctAnswer: 5,
                hint: "Kết hợp kiến thức từ nhiều lĩnh vực có thể kích thích tư duy sáng tạo và cách tiếp cận mới."
            },
            {
                id: 5,
                text: "Using the assessment criteria, which of the following would be an adequate response to this problem?",
                image: "images/question5.jpg",
                category: "Assessment Skills",
                options: [
                    { id: 1, text: "I would speak to the counselor's office as ...." },
                    { id: 2, text: "An essay that integrates different ...." },
                    { id: 3, text: "Describes some of different reasons why Jane might ......." },
                    { id: 4, text: "Describe your approach to the problem(s) and what measures ...." },
                    { id: 5, text: "Both B and C" },
                    { id: 6, text: "Both C and D" }
                ],
                correctAnswer: 6,
                hint: "Phản hồi tốt cần mô tả cách tiếp cận và lý do cụ thể, thường là sự kết hợp của các lựa chọn."
            },
            {
                id: 6,
                text: "Which if the following would probably NOT be a good thing to include in a file name? (Refer to 3.3a)",
                image: "",
                category: "File Management",
                options: [
                    { id: 1, text: "Author's surname" },
                    { id: 2, text: "Authors first name" },
                    { id: 3, text: "Year of publication" },
                    { id: 4, text: "Name of the article" }
                ],
                correctAnswer: 2,
                hint: "Tên riêng của tác giả thường không cần thiết và có thể gây nhầm lẫn trong tên file."
            },
            {
                id: 7,
                text: "Have a look at the following argument. What is the problem with the conclusion? I have the right to leave work after lunch. According to the Universal Declaration of Human Rights, article 24, everyone has the right to rest and leisure, including reasonable limitation of working hours. I have been working an unreasonable amount of hours.",
                image: "",
                category: "Argument Analysis",
                options: [
                    { id: 1, text: "The conclusion comes before the premises." },
                    { id: 2, text: "The conclusion is not the most logical result of the premises." },
                    { id: 3, text: "The conclusion does not follow from the premises." },
                    { id: 4, text: "There's no conclusion sentence in the argument" }
                ],
                correctAnswer: 2,
                hint: "Kết luận cần logic với tiền đề, nhưng 'leave work after lunch' không trực tiếp được chứng minh."
            },
            {
                id: 8,
                text: "Have a look at the following statement. What is the problem with the conclusion? 'According to the law, workers have the right to rest and leisure, including reasonable number of vacation days. I have been working so hard recently, which makes me feel tired. In sum, I have the right to ask for promotion.'",
                image: "",
                category: "Argument Analysis",
                options: [
                    { id: 1, text: "The conclusion comes after the premises." },
                    { id: 2, text: "The conclusion is too weak" },
                    { id: 3, text: "The conclusion is not the most logical result of the premises" },
                    { id: 4, text: "There's no problem with the conclusion" }
                ],
                correctAnswer: 3,
                hint: "Yêu cầu thăng chức không logic với quyền nghỉ ngơi hoặc sự mệt mỏi."
            },
            {
    id: 9,
    text: "What are different rhetorical situations at university? (Check 3 options.)",
    image: "",
    category: "Rhetorical Skills",
    multipleAnswers: true, // Thêm dòng này
    options: [
        { id: 1, text: "Submitting an essay to the professor." },
        { id: 2, text: "Ordering lunch via a mobile phone app." },
        { id: 3, text: "Attending seminars." },
        { id: 4, text: "Asking questions during a lecture." },
        { id: 5, text: "Dating with a partner at the university cafe'." },
        { id: 6, text: "All above situations." }
    ],
    correctAnswer: [1, 3, 4],
    hint: "Chọn các tình huống liên quan đến học thuật như nộp bài, tham gia hội thảo, đặt câu hỏi."
},
            {
                id: 10,
                text: "What are the purposes of conducting research?",
                image: "",
                category: "Research Skills",
                options: [
                    { id: 1, text: "Support, explain or clarify certain points" },
                    { id: 2, text: "Add detail to or more accurately define specific ideas" },
                    { id: 3, text: "Build and focus arguments" },
                    { id: 4, text: "All of the answers are correct" }
                ],
                correctAnswer: 4,
                hint: "Nghiên cứu phục vụ nhiều mục đích, bao gồm tất cả các lựa chọn trên."
            },
            {
    id: 11,
    text: "What can you do to make the most of your time at university? (Choose 3 answers)",
    image: "",
    category: "Time Management",
    multipleAnswers: true, // Thêm dòng này
    options: [
        { id: 1, text: "Try a lot of different things" },
        { id: 2, text: "Spend all of your time studying and learning the material" },
        { id: 3, text: "Volunteer" },
        { id: 4, text: "Overload on courses so that you can study a lot of different subjects" },
        { id: 5, text: "Get to know your professors and create good network" }
    ],
    correctAnswer: [1, 3, 5],
    hint: "Thử nhiều hoạt động, tình nguyện, và xây dựng mạng lưới là cách tối ưu thời gian."
},
            {
                id: 12,
                text: "According to the lecture, how will you gain the specialized knowledge required to solve the problems in a course?",
                image: "",
                category: "Learning Strategies",
                options: [
                    { id: 1, text: "By reading and memorizing the textbook and course notes" },
                    { id: 2, text: "By attending the lectures and tutorials" },
                    { id: 3, text: "You already have it in prior knowledge, for example from prerequisite courses or assumed knowledge from high school" },
                    { id: 4, text: "You need to do extra research" },
                    { id: 5, text: "All of the above" }
                ],
                correctAnswer: 5,
                hint: "Kiến thức chuyên môn đến từ nhiều nguồn, bao gồm tất cả các lựa chọn."
            },
            {
                id: 13,
                text: "Have a look at the following passage. What is wrong with the argument? 'In the last few years, smart phone sales increased quickly. At the same time, political unrest in African countries escalated. It is obvious that smart phone usage contributes mostly to the political environment in the last few years.'",
                image: "",
                category: "Argument Analysis",
                options: [
                    { id: 1, text: "It assumes that there is a cause-effect relationship between the two trends" },
                    { id: 2, text: "It draws a conclusion based on too little evidence" },
                    { id: 3, text: "It misrepresents the original argument" }
                ],
                correctAnswer: 1,
                hint: "Không có bằng chứng rõ ràng cho mối quan hệ nhân quả giữa hai xu hướng."
            },
            {
                id: 14,
                text: "You are a group leader. What should you do if a member in your group keeps absent in group meetings, finishes his tasks very late, and with low quality?",
                image: "",
                category: "Leadership Skills",
                options: [
                    { id: 1, text: "Ignore him and do your own tasks." },
                    { id: 2, text: "Ignore him because you will re-do all his tasks without his awareness." },
                    { id: 3, text: "Yell at him in front of other members." },
                    { id: 4, text: "Isolate him and only talk with other members." },
                    { id: 5, text: "Gather a meeting with the whole group, let him explain, and find out solutions together." }
                ],
                correctAnswer: 5,
                hint: "Giải quyết vấn đề theo cách hợp tác và xây dựng là tốt nhất."
            },
            {
                id: 15,
                text: "Which of the following is NOT a core value of academic culture?",
                image: "",
                category: "Academic Culture",
                options: [
                    { id: 1, text: "Honesty" },
                    { id: 2, text: "Trust" },
                    { id: 3, text: "Respect" },
                    { id: 4, text: "Responsibility" },
                    { id: 5, text: "\\Msdom" }
                ],
                correctAnswer: 5,
                hint: "Giá trị cốt lõi của văn hóa học thuật không bao gồm từ 'Msdom' (có thể là lỗi đánh máy, nhưng theo tài liệu là không đúng)."
            },
            {
                id: 16,
                text: "Which of the following is right about system thinking?",
                image: "",
                category: "Critical Thinking",
                options: [
                    { id: 1, text: "A way of understanding complex or unfamiliar ideas, issues, and situations" },
                    { id: 2, text: "Focuses on understanding the relationship between components" },
                    { id: 3, text: "Can help avoid assumptions in the common cause-effect approach" },
                    { id: 4, text: "All of the answers are correct" }
                ],
                correctAnswer: 4,
                hint: "Tư duy hệ thống bao gồm tất cả các khía cạnh trên."
            },
            {
                id: 17,
                text: "Mohammed is a third-year undergraduate student studying epidemiology. His professor is highly regarded in the field and Mohammed is very excited to study under him. While trying to replicate one of his professor's experiments, Mohammed notices that another student has made a mistake while calculating the data for the experiment. In one of the equations, one of the signs is around the wrong way. This has made the results of the experiment seem really positive. However, when Mohammed does his calculations, he notices that his results aren't very good at all. What is Mohammed required to do?",
                image: "",
                category: "Academic Integrity",
                options: [
                    { id: 1, text: "Mohammed isn't required to do anything" },
                    { id: 2, text: "He must tell the professor because the student is falsifying his/her results" },
                    { id: 3, text: "He must go to the dean of the faculty and accuse the other student of academic misconduct" },
                    { id: 4, text: "He must go to the dean of the faculty and report his professor's experiment" }
                ],
                correctAnswer: 2,
                hint: "Mohammed cần báo cáo với giáo sư để giữ tính trung thực học thuật."
            },
            {
                id: 18,
                text: "Which of the following statements is correct about paraphrasing?",
                image: "",
                category: "Writing Skills",
                options: [
                    { id: 1, text: "When you paraphrase, you express someone else's writing in your own words, usually to achieve greater clarity." },
                    { id: 2, text: "To paraphrase an original text, you need to understand the key information and adapt the language use." },
                    { id: 3, text: "There is no limit to how much you can paraphrase, as long as you cite the ideas of others appropriately." },
                    { id: 4, text: "All of the answers are correct." }
                ],
                correctAnswer: 4,
                hint: "Tất cả các tuyên bố đều đúng về việc diễn giải lại."
            },
            {
                id: 19,
                text: "Which of the following is a security management tip?",
                image: "",
                category: "Digital Security",
                options: [
                    { id: 1, text: "Should not share password with anyone" },
                    { id: 2, text: "Take a photo of your credit card and share it online" },
                    { id: 3, text: "Re-use passwords" },
                    { id: 4, text: "Use password: 1234" }
                ],
                correctAnswer: 1,
                hint: "Không chia sẻ mật khẩu là nguyên tắc cơ bản để bảo mật."
            },
            {
                id: 20,
                text: "Consider the following assessment question. 'You have zero privacy anyway. Get over it' (Scott McNealey, 1999). What is privacy? How have changes in technology made privacy an issue for citizens and governments? A student wants to research the effects of technology on privacy for citizens. What is the best combination of search terms below?",
                image: "",
                category: "Research Skills",
                options: [
                    { id: 1, text: "privacy AND technology AND civil*" },
                    { id: 2, text: "privacy AND technology AND (civilians OR citizens OR subjects)" },
                    { id: 3, text: "privacy OR technology AND civilian" },
                    { id: 4, text: "privacy AND technology NOT government" }
                ],
                correctAnswer: 2,
                hint: "Sử dụng từ khóa đa dạng như 'civilians OR citizens OR subjects' để mở rộng tìm kiếm."
            },
            {
                id: 21,
                text: "What do you check to find if a resource has a scholarly purpose?",
                image: "",
                category: "Scholarly Evaluation",
                options: [
                    { id: 1, text: "Language used" },
                    { id: 2, text: "Authoritative author and publisher" },
                    { id: 3, text: "Reference list" },
                    { id: 4, text: "All are correct" }
                ],
                correctAnswer: 4,
                hint: "Tất cả các yếu tố trên đều giúp xác định mục đích học thuật."
            },
            {
                id: 22,
                text: "A student is asked to do an ethnic factor analysis of a movie. The student already has strong opinions about both ethnic characteristics, sovereignty and the film they must analyze. However, they make a mental note of their biases when conducting research. Instead of giving a subjective opinion, the student makes sure they read sources representing a variety of different views. Which of the following dispositions or habits of mind for critical thinking is the student displaying?",
                image: "",
                category: "Critical Thinking",
                options: [
                    { id: 1, text: "Being systemic in your thinking" },
                    { id: 2, text: "Self-confidence" },
                    { id: 3, text: "Inquisitiveness" },
                    { id: 4, text: "Metacognition" }
                ],
                correctAnswer: 4,
                hint: "Sự tự nhận thức về thành kiến là đặc điểm của metacognition."
            },
            {
                id: 23,
                text: "Problem solving occurs when a group:",
                image: "",
                category: "Problem Solving",
                options: [
                    { id: 1, text: "Reaches a conclusion." },
                    { id: 2, text: "Passes judgment on an issue under consideration." },
                    { id: 3, text: "Develops a plan for reducing or eliminating the harmful effects of a problem." },
                    { id: 4, text: "Chooses among alternatives" }
                ],
                correctAnswer: 3,
                hint: "Giải quyết vấn đề tập trung vào việc phát triển kế hoạch giảm thiểu tác động tiêu cực."
            },
            {
                id: 24,
                text: "Which of the following is considered a primary source of information?",
                image: "",
                category: "Information Literacy",
                options: [
                    { id: 1, text: "Dictionary" },
                    { id: 2, text: "Diary" },
                    { id: 3, text: "Textbook" },
                    { id: 4, text: "Review article" },
                    { id: 5, text: "Encyclopedias" }
                ],
                correctAnswer: 2,
                hint: "Nguồn sơ cấp là tài liệu gốc như nhật ký, không phải tài liệu tổng hợp."
            },
            {
                id: 25,
                text: "We need to conduct research to",
                image: "",
                category: "Research Skills",
                options: [
                    { id: 1, text: "Support, explain and clarify certain point" },
                    { id: 2, text: "Add details to more accurately defined specific ideas" },
                    { id: 3, text: "Access expert opinions that we don't know before" },
                    { id: 4, text: "All of the answers are correct" }
                ],
                correctAnswer: 4,
                hint: "Nghiên cứu phục vụ nhiều mục đích, bao gồm tất cả các lựa chọn."
            },
            
            {
    id: 26,
    text: "Which of the following publishers would be considered unreliable for an academic context?",
    image: "",
    category: "Scholarly Evaluation",
    multipleAnswers: true, // Thêm dòng này
    options: [
        { id: 1, text: "Wikipedia" },
        { id: 2, text: "Oxford University Press" },
        { id: 3, text: "Canadian Journal of Chemistry (peer-reviewed journal)" },
        { id: 4, text: "National Geographic" },
        { id: 5, text: "2 Hungry Guys - A Sydney Food Blog" }
    ],
    correctAnswer: [1, 4, 5],
    hint: "Nguồn không đáng tin cậy bao gồm Wikipedia, National Geographic, và blog cá nhân."
            },

            {
                id: 27,
                text: "It's 4.30 pm, and Mary has just submitted her essay for Introduction to Microbiology online. She feels pretty confident she did well. .... However, as she is closing down her computer, she realizes that she accidentally submitted her draft version, which is missing many of her in-text and end-of-text references for her assignment. The online form won't let her submit the essay again. Mary is very concerned that this will be counted as plagiarism. What should Mary do?",
                image: "",
                category: "Academic Integrity",
                options: [
                    { id: 1, text: "Email her lecturer immediately with the final version of her essay attached, give a brief explanation and apologize." },
                    { id: 2, text: "Wait until the next day when she can...(truncated 172267 characters)...r courses than science students" }
                ],
                correctAnswer: 1,
                hint: "Mary cần hành động ngay lập tức và liên hệ giảng viên để giải thích."
            },
            {
                id: 28,
                text: "In arts and social sciences courses students will generally need to engage in argumentation much later in their courses than science students.",
                image: "",
                category: "Academic Skills",
                options: [
                    { id: 1, text: "True" },
                    { id: 2, text: "False" }
                ],
                correctAnswer: 1,
                hint: "Sinh viên khoa học xã hội thường tập trung lập luận muộn hơn so với sinh viên khoa học."
            },
            {
                id: 29,
                text: "You are working on an assignment and cannot seem to come up with what you think are the correct answers. You keep trying to figure out your calculations, hoping to make a calculation error. You realize after a few efforts that the problem isn't going away. You decide to fake data in order to arrive at what you believe is the correct answer.",
                image: "",
                category: "Academic Integrity",
                options: [
                    { id: 1, text: "There is no problem." },
                    { id: 2, text: "The assignment was extremely cfifficull, and you know that everyone else did fake data, so you feel justified in your actions." },
                    { id: 3, text: "You are responsible for fabrication." },
                    { id: 4, text: "You are not responsible for fabrication." }
                ],
                correctAnswer: 3,
                hint: "Sử dụng dữ liệu giả là hành vi vi phạm học thuật (fabrication)."
            },
            {
                id: 30,
                text: "You are working on an exam in class when the lecturer says the exam is finished. You still keep working on the exam.",
                image: "",
                category: "Academic Integrity",
                options: [
                    { id: 1, text: "This is a case of academic misconduct" },
                    { id: 2, text: "You were ten minutes late to class and want to work for an additional ten minutes to ensure that you have the same amount of time as everyone else- After all, this is only fair!" },
                    { id: 3, text: "You are responsible for fabrication." },
                    { id: 4, text: "This is not a case of academic misconduct." }
                ],
                correctAnswer: 1,
                hint: "Tiếp tục làm bài sau khi giám thị kết thúc là vi phạm quy chế thi."
            },
            {
                id: 31,
                text: "A number of ways that we can be creative when solving a problem include all except for:",
                image: "",
                category: "Creativity",
                options: [
                    { id: 1, text: "A random juxtaposition" },
                    { id: 2, text: "Negative brainstorming" },
                    { id: 3, text: "Doing the opposite" },
                    { id: 4, text: "Working forwards" }
                ],
                correctAnswer: 4,
                hint: "Working forwards không phải là cách sáng tạo, mà là cách tiếp cận tuyến tính."
            },
            {
                id: 32,
                text: "Is this student's writing an example of plagiarism? Original: 'But despite the deeper level of knowledge that our computers will soon acquire, losing our jobs to machines doesn't have to be a bad thing. .................While there are a number of disadvantages to Al performing formerly human jobs, there are also advantages, such as the hand over of routine tasks that are better performed by computers (Bollegala)' (Refer to 4.2, 4.3)",
                image: "",
                category: "Academic Integrity",
                options: [
                    { id: 1, text: "It is not an example of plagiarism" },
                    { id: 2, text: "It is an example of plagiarism because the student has taken the original idea." },
                    { id: 3, text: "It is an example of plagiarism because the student has not referenced the original information source correctly" },
                    { id: 4, text: "It is an example of plagiarism because the student has copied the wording of the original text." }
                ],
                correctAnswer: 1,
                hint: "Việc trích dẫn đúng và diễn giải ý tưởng không phải là đạo văn."
            },

            {
    id: 33,
    text: "Is this student's writing an example of plagiarism? Original: 'But ethical issues arising from human and AI co-working environments is a real concern. It is one thing getting a face incorrectly recognised in an image uploaded to Facebook...very easily happen.' Student's writing: 'Other possible implications of AI replacing humans in employment are .....diagnoses outweighing other forms of ethical infractions.' (Refer to 4.1, 4.2, 4.3)",
    image: "",
    category: "Academic Integrity",
    options: [
        { id: 1, text: "It is not an example of plagiarism." },
        { id: 2, text: "It is an example of plagiarism because the student has taken the original idea." },
        { id: 3, text: "It is an example of plagiarism because the student has not included the page number in the in-text citation." },
        { id: 4, text: "It is an example of plagiarism because the student has copied the wording of the original text." }
    ],
    correctAnswer: 1,
    hint: "Nếu sinh viên trích dẫn đúng nguồn và diễn giải ý tưởng, thì không phải là đạo văn."
},
{
    id: 34,
    text: "Which of the following is not an example of analytical essays' topic(s)?",
    image: "",
    category: "Writing Skills",
    options: [
        { id: 1, text: "Optimism is better than pessimism" },
        { id: 2, text: "Why is there miscommunication?" },
        { id: 3, text: "Why did religion cause many conflicts?" },
        { id: 4, text: "What vaccination means for babies?" },
        { id: 5, text: "What are the communication channels?" }
    ],
    correctAnswer: 1,
    hint: "Chủ đề phân tích cần tập trung vào việc giải thích hoặc đánh giá, không phải đưa ra ý kiến chủ quan như 'tốt hơn'."
},
{
    id: 35,
    text: "Consider the following question from a Business Communication exam: 'To successfully communicate in business working environment, some principles should be adopted. List those principles.' What is the function word or phrase in the question?",
    image: "",
    category: "Communication Skills",
    options: [
        { id: 1, text: "List" },
        { id: 2, text: "Business working environment" },
        { id: 3, text: "Principles" },
        { id: 4, text: "Communicate" }
    ],
    correctAnswer: 1,
    hint: "Từ chức năng chỉ ra hành động cần thực hiện, ở đây là 'liệt kê' (List)."
},
{
    id: 36,
    text: "Consider the following situation: 'Fatima is writing an essay for her Macroeconomics course on the Great Recession. She is firmly convinced that a lack of government regulation of the financial industry was responsible for the crisis. However, she wants to find some evidence to support her argument before she starts writing.' In lesson 1.2b Michelle Harrison refers to 3 ways that information and digital literacy contribute to the values of academic culture. Which way does Fatima’s situation refer to?",
    image: "",
    category: "Information Literacy",
    options: [
        { id: 1, text: "The importance of finding good evidence to support your argument." },
        { id: 2, text: "The flexibility to change your opinion on an issue on evidence to the contrary." },
        { id: 3, text: "The ability to identify a problem or research question." },
        { id: 4, text: "The importance of using academic journal databases to find information." }
    ],
    correctAnswer: 1,
    hint: "Fatima đang tìm kiếm bằng chứng để hỗ trợ lập luận của mình, điều này liên quan đến giá trị tìm kiếm bằng chứng tốt."
},
{
    id: 37,
    text: "What questions can you ask to determine if the evidence is relevant to the conclusion? (Choose 2 answers)",
    image: "",
    category: "Critical Thinking",
    multipleAnswers: true,
    options: [
        { id: 1, text: "Does the evidence support the conclusion?" },
        { id: 2, text: "If I took the evidence away, would it make a difference to the conclusion?" },
        { id: 3, text: "Does the evidence seem convincing?" },
        { id: 4, text: "Is the evidence old and out-of-date?" }
    ],
    correctAnswer: [1, 2],
    hint: "Để đánh giá tính liên quan, cần xem bằng chứng có hỗ trợ kết luận và có ảnh hưởng nếu bị loại bỏ hay không."
},
{
    id: 38,
    text: "Which of the following are examples of your professional identity online? (Refer to 5.3a) (Check 2 options)",
    image: "",
    category: "Digital Literacy",
    multipleAnswers: true,
    options: [
        { id: 1, text: "Your log in details for eBay" },
        { id: 2, text: "Your LinkedIn profile" },
        { id: 3, text: "Your online banking account" },
        { id: 4, text: "An email discussion list for people in the same industry" },
        { id: 5, text: "Your Facebook account" },
        { id: 6, text: "Your Instagram account" }
    ],
    correctAnswer: [2, 4],
    hint: "Danh tính chuyên nghiệp trực tuyến liên quan đến các nền tảng như LinkedIn và danh sách email ngành."
},
{
    id: 39,
    text: "What are the differences between information and knowledge?",
    image: "",
    category: "Information Literacy",
    options: [
        { id: 1, text: "Information includes all things you can search on the Internet. Knowledge is what you have in mind." },
        { id: 2, text: "Information is a person's understanding of the situation or subject. Knowledge includes facts, details, descriptions, or a pre-existing analysis of a situational subject." },
        { id: 3, text: "Information includes facts, details, descriptions, or a preexisting analysis of a situational subject. Knowledge is a person's understanding of the situation or subject." },
        { id: 4, text: "All answers are not correct." }
    ],
    correctAnswer: 3,
    hint: "Thông tin là dữ liệu hoặc sự thật, còn kiến thức là sự hiểu biết của cá nhân về dữ liệu đó."
},
{
    id: 40,
    text: "What is IDEAL in Problem Solving Strategy?",
    image: "",
    category: "Problem Solving",
    options: [
        { id: 1, text: "I - Identify the problem" },
        { id: 2, text: "D - Define the cause" },
        { id: 3, text: "E - Explore possible strategies" },
        { id: 4, text: "A - Action" },
        { id: 5, text: "L - Look back and Learn" },
        { id: 6, text: "All above" }
    ],
    correctAnswer: 6,
    hint: "IDEAL là chiến lược giải quyết vấn đề bao gồm tất cả các bước trên."
},
{
        id: 41,
        text: "Which is NOT example of common fallacies?",
        image: "",
        category: "Critical Thinking",
        options: [
            { id: 1, text: "Hasty generalization" },
            { id: 2, text: "Jumping from correlation to cause" },
            { id: 3, text: "Straw man fallacy" },
            { id: 4, text: "Misinterpretation of reasoning" },
            { id: 5, text: "Faulty analogy" }
        ],
        correctAnswer: 4,
        hint: "Ngụy biện phổ biến bao gồm các lựa chọn như suy diễn vội vàng, nhầm lẫn nhân quả, hoặc ngụy biện người rơm, nhưng 'misinterpretation of reasoning' không phải là ngụy biện cụ thể."
    },
    {
        id: 42,
        text: "According to the textbook authors, what is the most important skill for building and strengthening positive relationships?",
        image: "",
        category: "Communication Skills",
        options: [
            { id: 1, text: "Creativity" },
            { id: 2, text: "Innovation" },
            { id: 3, text: "Communication" },
            { id: 4, text: "Intellectual capacity" }
        ],
        correctAnswer: 3,
        hint: "Kỹ năng giao tiếp là yếu tố quan trọng nhất để xây dựng và củng cố mối quan hệ tích cực."
    },
    {
        id: 43,
        text: "What are the three main sources of information for undergraduate students beside tutorials and lectures?",
        image: "",
        category: "Information Literacy",
        options: [
            { id: 1, text: "Textbooks, course notes, scholarly journal articles" },
            { id: 2, text: "Textbooks, test banks, magazines" },
            { id: 3, text: "Reference books, scholarly journals, test banks" },
            { id: 4, text: "Articles, news, cultural records" }
        ],
        correctAnswer: 1,
        hint: "Nguồn thông tin chính cho sinh viên đại học bao gồm sách giáo khoa, ghi chú khóa học và bài báo học thuật."
    },
    {
        id: 44,
        text: "Secondary sources include:",
        image: "",
        category: "Information Literacy",
        options: [
            { id: 1, text: "Bibliographies" },
            { id: 2, text: "Correspondence" },
            { id: 3, text: "Photographs" },
            { id: 4, text: "Work of art" }
        ],
        correctAnswer: 1,
        hint: "Nguồn thứ cấp bao gồm các tài liệu phân tích hoặc tổng hợp như danh mục tài liệu tham khảo, không phải nguồn gốc như thư từ hoặc ảnh."
    },
    {
        id: 45,
        text: "Which of the following situations would not be an infringement of copyright law?",
        image: "",
        category: "Academic Integrity",
        options: [
            { id: 1, text: "A university Drama club producing a play. The play was specifically written by a student for the production." },
            { id: 2, text: "Science students marketing a product they developed at university." },
            { id: 3, text: "A student making a few photocopies from a university library book for his or her own study purposes." },
            { id: 4, text: "All of above." }
        ],
        correctAnswer: 4,
        hint: "Tất cả các tình huống trên đều không vi phạm luật bản quyền vì chúng liên quan đến việc sử dụng tài liệu gốc hoặc cho mục đích học tập cá nhân."
    },
    {
        id: 46,
        text: "Critically evaluating the source of information that we find enables us to use this information:",
        image: "",
        category: "Information Literacy",
        options: [
            { id: 1, text: "in an informed and knowledgeable way." },
            { id: 2, text: "in a way that fits our purpose." },
            { id: 3, text: "in a way that is easy for us to do our assignment." },
            { id: 4, text: "None of above is correct." }
        ],
        correctAnswer: 1,
        hint: "Đánh giá nguồn thông tin một cách phản biện giúp sử dụng thông tin một cách hiểu biết và có căn cứ."
    },
    {
        id: 47,
        text: "Scholarly record in university is all of the below EXCEPT",
        image: "",
        category: "Scholarly Evaluation",
        options: [
            { id: 1, text: "\"The curated account of past scholarly endeavor\" written by academics in particular fields" },
            { id: 2, text: "Scholarly record is aimed at academics or students in the field" },
            { id: 3, text: "News reports and articles, films and television shows, facebook status" },
            { id: 4, text: "Textbooks, edited nonfiction books, single-author nonfiction books" }
        ],
        correctAnswer: 3,
        hint: "Hồ sơ học thuật không bao gồm các nguồn không chính thống như báo chí, phim ảnh hoặc trạng thái Facebook."
    },
    {
        id: 48,
        text: "What is the precise structure for a Research report?",
        image: "",
        category: "Writing Skills",
        options: [
            { id: 1, text: "Opening - Identification of Problem - Presentation of Data - Processing of Data - Closing" },
            { id: 2, text: "Introduction - Methodologies - Results - Discussion/Conclusion" },
            { id: 3, text: "Summary - Methodologies - Presentation of Data - Recommendation" },
            { id: 4, text: "Abstract - Identification of Problem - Research Steps - Processing of Data - Discussion" }
        ],
        correctAnswer: 2,
        hint: "Cấu trúc chuẩn của báo cáo nghiên cứu bao gồm Giới thiệu, Phương pháp, Kết quả, và Thảo luận/Kết luận."
    },
    {
        id: 49,
        text: "What advice does Dr George Ridgway give for getting the most out of your tutorials?",
        image: "",
        category: "Learning Strategies",
        options: [
            { id: 1, text: "Be engaged with the topic of the tutorial." },
            { id: 2, text: "Only talk to your tutor." },
            { id: 3, text: "Guide other people through the topic of the tutorial." },
            { id: 4, text: "Present to the other people in the tutorial." }
        ],
        correctAnswer: 1,
        hint: "Tham gia tích cực vào chủ đề của buổi hướng dẫn là cách tốt nhất để tận dụng tối đa."
    },
    {
        id: 50,
        text: "Which statement is incorrect?",
        image: "",
        category: "Writing Skills",
        options: [
            { id: 1, text: "Analyzing essay questions is the most important part of the essay writing process." },
            { id: 2, text: "Analyzing essay questions should be done after you begin planning." },
            { id: 3, text: "Analyzing essay questions should be done before you begin researching." },
            { id: 4, text: "Analyzing essay questions should be done before you begin writing." }
        ],
        correctAnswer: 2,
        hint: "Phân tích câu hỏi bài luận cần được thực hiện trước khi lập kế hoạch, nghiên cứu và viết bài."
    },
            // Lưu trữ trạng thái làm bài
        ]
    
};

            
   