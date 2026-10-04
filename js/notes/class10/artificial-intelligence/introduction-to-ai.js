// Class 10 Artificial Intelligence — ultra-detailed continuous chapter
const ChapterData = {
  "id": "10-artificialintelligence-introduction-to-ai",
  "title": "Introduction to Artificial Intelligence",
  "file": "introduction-to-ai.js",
  "description": "A continuous, detailed study of intelligence, AI, ML, DL, AI domains, applications, smart environments and responsible AI.",
  "summary": "AI is a broad field concerned with intelligent capabilities in machines; the chapter develops the foundations, domains, applications and ethical responsibilities of AI.",
  "sections": [
    {
      "title": "Foundations of Artificial Intelligence",
      "blocks": [
        {
          "type": "paragraph",
          "title": "1.1 What Intelligence Means",
          "text": "Intelligence is the ability to understand a situation, learn from experience, reason about alternatives, solve problems, recognise patterns, communicate meaningfully and make decisions that help achieve a goal. Human intelligence is not a single skill. It combines perception, memory, learning, language, reasoning, creativity and judgement. When we study Artificial Intelligence, we use this broad idea of intelligence as a starting point and then ask how some of these abilities can be represented or supported by machines."
        },
        {
          "type": "concept",
          "title": "1.2 Intelligence is More Than Calculation",
          "text": "A calculator can perform arithmetic much faster than a person, but calculation alone does not make a system generally intelligent. A person can decide which calculation is relevant, interpret an unusual situation, ask for missing information and change a plan when circumstances change. AI systems are therefore designed for particular tasks such as classification, prediction, recommendation, language processing or visual recognition."
        },
        {
          "type": "paragraph",
          "title": "1.3 How People Make Decisions",
          "text": "Decision making begins with a goal or need. A person gathers relevant information, considers possible choices, predicts consequences, applies rules or experience and finally selects an action. The quality of a decision depends on the information available and the criteria used. In an AI system, these stages can be represented using data, rules, models and an output or recommendation."
        },
        {
          "type": "comic",
          "title": "Comic: A decision before the model",
          "dialogues": [
            {
              "character": "Surya",
              "dialogue": "I have two routes to school. One is shorter, but it is crowded in the morning."
            },
            {
              "character": "Verma Sir",
              "dialogue": "So the shortest route is not automatically the best route."
            },
            {
              "character": "Surya",
              "dialogue": "Right. I need to consider time, traffic and safety before choosing."
            },
            {
              "character": "Verma Sir",
              "dialogue": "That is the idea behind intelligent decision making: the goal and relevant evidence matter."
            }
          ],
          "result": "A machine decision is useful only when the system has an appropriate goal, relevant information and a suitable method."
        },
        {
          "type": "exam",
          "title": "Check Your Understanding",
          "question": "What is intelligence in the context of AI?",
          "answer": "Intelligence is the ability to learn, reason, solve problems, recognise patterns, understand information and make decisions to achieve a goal. AI attempts to reproduce or support selected intelligent abilities using machines."
        },
        {
          "type": "paragraph",
          "title": "1.4 What Is Artificial Intelligence?",
          "text": "Artificial Intelligence is the field of study and technology concerned with creating machines or computer systems that can perform tasks requiring abilities commonly associated with human intelligence. These tasks can include recognising patterns, understanding language, making predictions, recommending choices, classifying information and interacting with people. AI does not mean that a machine automatically possesses human-like intelligence in every situation."
        },
        {
          "type": "concept",
          "title": "1.5 What AI Is Not",
          "text": "AI is not simply any electronic device, automation or program. A fixed timer that switches a light on at 7 p.m. follows a predetermined instruction. A system that learns from patterns in sensor data to predict when lighting should be adjusted uses an AI-related approach. The difference is important: automation can follow fixed rules, while many AI systems use data-driven or model-based methods to produce outputs for situations that are not explicitly listed one by one."
        },
        {
          "type": "data",
          "title": "1.6 Automation and AI Compared",
          "headers": [
            "Feature",
            "Fixed automation",
            "AI-based system"
          ],
          "rows": [
            [
              "Decision rule",
              "Predetermined instructions",
              "Rules or learned patterns may guide output"
            ],
            [
              "Adaptation",
              "Usually limited to programmed cases",
              "Can generalise from examples within its designed task"
            ],
            [
              "Data role",
              "May be small or unnecessary",
              "Often central to training, testing or operation"
            ],
            [
              "Example",
              "Timer-controlled fan",
              "System predicting equipment failure"
            ]
          ],
          "text": "The distinction is about how the system reaches its output, not about whether a device is electronic."
        },
        {
          "type": "exam",
          "title": "Exam Focus",
          "question": "Differentiate between automation and AI.",
          "answer": "Automation performs a task according to predefined instructions. AI systems are designed to perform tasks associated with intelligent behaviour and may use data, models, pattern recognition or learning to produce outputs for new cases."
        },
        {
          "type": "practice",
          "title": "Think and Apply",
          "question": "A school bell rings automatically at fixed times. Is it necessarily an AI system? Explain.",
          "answer": "No. A fixed schedule can be implemented using ordinary automation because the bell follows predefined times. It would require an AI component only if the system were designed to infer or predict appropriate bell times from changing data or conditions."
        },
        {
          "type": "paragraph",
          "title": "1.7 Machine Learning and Deep Learning",
          "text": "Machine Learning is a branch of AI in which systems use data and algorithms to identify patterns or relationships and improve performance on a task. Instead of writing every possible rule, developers provide examples or other information from which a model can learn useful patterns. Deep Learning is a specialised approach that uses multi-layer neural networks to learn increasingly complex representations from data. The three terms should not be treated as synonyms: AI is the broad field, machine learning is one major approach within AI, and deep learning is a specialised family of machine-learning methods."
        },
        {
          "type": "data",
          "title": "1.8 AI, ML and DL Relationship",
          "headers": [
            "Term",
            "Meaning",
            "Relationship"
          ],
          "rows": [
            [
              "Artificial Intelligence",
              "Broad field of building systems with intelligent capabilities",
              "Umbrella field"
            ],
            [
              "Machine Learning",
              "Methods that learn patterns from data",
              "Major approach within AI"
            ],
            [
              "Deep Learning",
              "Learning with multi-layer neural networks",
              "Specialised area within ML"
            ]
          ],
          "text": ""
        },
        {
          "type": "paragraph",
          "title": "1.9 The Three AI Domains",
          "text": "The introductory course uses three important domains to help learners understand how AI interacts with information: Data, Computer Vision and Natural Language Processing. Data-based AI works with structured or unstructured information to discover patterns and make predictions. Computer Vision deals with images and visual information. Natural Language Processing deals with human language in text or speech. A real application may combine more than one domain."
        },
        {
          "type": "exam",
          "title": "Exam Focus",
          "question": "Name the three introductory AI domains.",
          "answer": "The three domains are Data, Computer Vision (CV), and Natural Language Processing (NLP)."
        },
        {
          "type": "comic",
          "title": "Comic: Three domains, one problem",
          "dialogues": [
            {
              "character": "Surya",
              "dialogue": "A smart school system could use attendance records as data."
            },
            {
              "character": "Sharma Sir",
              "dialogue": "A camera could provide visual information for a different task."
            },
            {
              "character": "Ansh",
              "dialogue": "And a chatbot could understand students asking questions in natural language."
            },
            {
              "character": "Sharma Sir",
              "dialogue": "Exactly. Different AI domains process different kinds of information."
            }
          ]
        },
        {
          "type": "paragraph",
          "title": "1.10 AI in Everyday Life",
          "text": "AI-related systems can be encountered in recommendation systems, voice assistants, spam filtering, translation, image search, navigation, fraud detection, accessibility tools and personalised learning. The presence of AI should be judged by the task and method rather than by marketing language. A useful learner asks: What input is being processed? What output is produced? Is the system using rules, learned patterns or both? What data influences the result?"
        },
        {
          "type": "exam",
          "title": "Application Question",
          "question": "Give four everyday applications of AI and state the kind of task each performs.",
          "answer": "Examples include voice assistants for language interaction, recommendation systems for predicting suitable content or products, image recognition for identifying visual patterns, and spam filters for classifying messages."
        },
        {
          "type": "paragraph",
          "title": "1.11 Smart Homes, Smart Schools and Smart Cities",
          "text": "A smart environment uses connected devices, sensors, software and data to monitor conditions and support decisions or actions. A smart home might adjust lighting or temperature using sensor information. A smart school might analyse energy use or help organise learning resources. A smart city can combine information from transport, utilities, public services and sensors to improve planning. Smart does not automatically mean intelligent; the value depends on how data and systems are designed and used."
        },
        {
          "type": "paragraph",
          "title": "1.12 AI and Sustainable Development",
          "text": "AI can support work related to sustainable development when it is used responsibly. Data analysis can help identify patterns in energy consumption, agriculture, transport, health or environmental monitoring. At the same time, AI systems require computing resources and can introduce social risks. Responsible use therefore means considering both intended benefits and possible negative consequences."
        },
        {
          "type": "paragraph",
          "title": "1.13 Ethics, Bias and Access",
          "text": "AI decisions can affect people, so technical performance is not the only concern. Bias may enter through incomplete or unrepresentative data, unsuitable labels, design choices or unequal access to technology. Privacy, transparency, safety, accountability and fairness are important considerations. An AI system should not be treated as automatically neutral simply because a computer produced the result."
        },
        {
          "type": "data",
          "title": "1.14 Ethical Questions to Ask",
          "headers": [
            "Question",
            "Why it matters"
          ],
          "rows": [
            [
              "Who benefits?",
              "Benefits should not be considered only from the developer’s perspective."
            ],
            [
              "Who may be harmed?",
              "Errors can affect people differently."
            ],
            [
              "What data is used?",
              "Sensitive or poor-quality data can create risks."
            ],
            [
              "Can the result be explained?",
              "People may need to understand important decisions."
            ],
            [
              "Who is responsible?",
              "A clear responsibility structure is needed for deployment and correction."
            ]
          ],
          "text": ""
        },
        {
          "type": "exam",
          "title": "Long Answer",
          "question": "Explain why ethics is important in Artificial Intelligence.",
          "answer": "Ethics is important because AI systems can influence decisions and opportunities affecting people. Ethical analysis considers fairness, privacy, safety, transparency, accountability, bias and access. A technically accurate system can still create harm if its data or use is unfair or inappropriate."
        },
        {
          "type": "comic",
          "title": "Comic: The fairness question",
          "dialogues": [
            {
              "character": "Arushi",
              "dialogue": "The model gives different results for two groups."
            },
            {
              "character": "Surya",
              "dialogue": "Before calling one group less suitable, we should check the training data and the way the model was designed."
            },
            {
              "character": "Verma Sir",
              "dialogue": "Good. AI output must be examined for possible bias and unequal impact."
            },
            {
              "character": "Arushi",
              "dialogue": "So accuracy alone does not answer every ethical question."
            }
          ]
        },
        {
          "type": "paragraph",
          "title": "1.15 Advantages and Limitations of AI",
          "text": "AI can process large amounts of information quickly, identify patterns, automate repetitive tasks, support accessibility and assist decision making. However, AI can also make errors, inherit bias, require large or high-quality datasets, reduce transparency in some systems, create privacy concerns and change the nature of work. AI should therefore be viewed as a tool whose benefits depend on its design, data, context and human oversight."
        },
        {
          "type": "exam",
          "title": "Revision Question",
          "question": "State three advantages and three limitations of AI.",
          "answer": "Advantages include fast processing of large datasets, assistance with pattern recognition and automation of repetitive tasks. Limitations include possible bias, dependence on data quality and the possibility of incorrect or difficult-to-explain outputs."
        }
      ]
    },
    {
      "title": "Extended Board-Style Revision and Application",
      "blocks": [
        {
          "type": "exam",
          "title": "Board Revision 1",
          "question": "Define AI in one sentence.",
          "answer": "AI is the field concerned with building systems capable of selected intelligent tasks."
        },
        {
          "type": "paragraph",
          "title": "Application Note 1",
          "text": "In an examination or project, connect the definition to the purpose, describe the process in the correct order, and use a concrete example to show that the concept has been understood. The exact application should remain consistent with the problem being discussed."
        },
        {
          "type": "exam",
          "title": "Board Revision 2",
          "question": "Differentiate AI, machine learning and deep learning.",
          "answer": "AI is the broad field; machine learning learns patterns from data; deep learning uses multi-layer neural networks."
        },
        {
          "type": "paragraph",
          "title": "Application Note 2",
          "text": "In an examination or project, connect the definition to the purpose, describe the process in the correct order, and use a concrete example to show that the concept has been understood. The exact application should remain consistent with the problem being discussed."
        },
        {
          "type": "exam",
          "title": "Board Revision 3",
          "question": "Name the three introductory AI domains.",
          "answer": "Data, Computer Vision and Natural Language Processing."
        },
        {
          "type": "paragraph",
          "title": "Application Note 3",
          "text": "In an examination or project, connect the definition to the purpose, describe the process in the correct order, and use a concrete example to show that the concept has been understood. The exact application should remain consistent with the problem being discussed."
        },
        {
          "type": "exam",
          "title": "Board Revision 4",
          "question": "Explain one benefit and one limitation of AI.",
          "answer": "Benefits include rapid data processing and automation; limitations include bias and dependence on data quality."
        },
        {
          "type": "paragraph",
          "title": "Application Note 4",
          "text": "In an examination or project, connect the definition to the purpose, describe the process in the correct order, and use a concrete example to show that the concept has been understood. The exact application should remain consistent with the problem being discussed."
        },
        {
          "type": "exam",
          "title": "Board Revision 5",
          "question": "Why should AI systems be evaluated for bias?",
          "answer": "Bias can cause unfair outcomes for particular groups or cases."
        },
        {
          "type": "paragraph",
          "title": "Application Note 5",
          "text": "In an examination or project, connect the definition to the purpose, describe the process in the correct order, and use a concrete example to show that the concept has been understood. The exact application should remain consistent with the problem being discussed."
        },
        {
          "type": "exam",
          "title": "Board Revision 6",
          "question": "Give two examples of AI in everyday life.",
          "answer": "Voice assistants and recommendation systems are two examples."
        },
        {
          "type": "paragraph",
          "title": "Application Note 6",
          "text": "In an examination or project, connect the definition to the purpose, describe the process in the correct order, and use a concrete example to show that the concept has been understood. The exact application should remain consistent with the problem being discussed."
        }
      ]
    },
    {
      "title": "Extended Topic-by-Topic Study",
      "blocks": [
        {
          "type": "paragraph",
          "title": "1.16 Intelligence, Learning and Adaptation",
          "text": "Human learning changes future decisions because experience modifies what a person knows and how that knowledge is applied. In AI, learning usually refers to an algorithm finding useful patterns or parameters from data or feedback. Adaptation should not be assumed to mean unlimited self-improvement: a deployed model normally operates within the task, data distribution and design boundaries established by its creators."
        },
        {
          "type": "keypoint",
          "title": "Key Point 1",
          "items": [
            "Human learning changes future decisions because experience modifies what a person knows and how that knowledge is applied.",
            "Connect this idea to the relevant stage, domain or evaluation question when applying it."
          ]
        },
        {
          "type": "paragraph",
          "title": "1.17 Perception, Reasoning and Action",
          "text": "Many intelligent systems can be understood as a pipeline: information is received, relevant patterns are interpreted, a decision or prediction is produced, and an action may follow. A camera provides visual input; a language interface provides text or speech; a recommendation system produces a ranked set of options. Thinking in terms of input, processing and output makes complex AI applications easier to analyse."
        },
        {
          "type": "keypoint",
          "title": "Key Point 2",
          "items": [
            "Many intelligent systems can be understood as a pipeline: information is received, relevant patterns are interpreted, a decision or prediction is produced, and an action may follow.",
            "Connect this idea to the relevant stage, domain or evaluation question when applying it."
          ]
        },
        {
          "type": "paragraph",
          "title": "1.18 Human-Machine Interaction",
          "text": "Human-machine interaction describes the ways people communicate with and receive information from computer systems. AI can make interaction more natural through speech, language, vision and personalised interfaces. At the same time, users should know when an interaction is automated, what information is being collected and how much trust should be placed in the output."
        },
        {
          "type": "keypoint",
          "title": "Key Point 3",
          "items": [
            "Human-machine interaction describes the ways people communicate with and receive information from computer systems.",
            "Connect this idea to the relevant stage, domain or evaluation question when applying it."
          ]
        },
        {
          "type": "paragraph",
          "title": "1.19 AI Access",
          "text": "Access to AI is not equal for every person or community. Differences in devices, connectivity, language resources, digital skills, cost and accessibility can affect who benefits. A responsible project considers whether the intended users can actually use the system and whether important groups are excluded from its design or data."
        },
        {
          "type": "keypoint",
          "title": "Key Point 4",
          "items": [
            "Access to AI is not equal for every person or community.",
            "Connect this idea to the relevant stage, domain or evaluation question when applying it."
          ]
        },
        {
          "type": "paragraph",
          "title": "1.20 Bias Can Begin Before Modelling",
          "text": "Bias is not created only by the final algorithm. It can enter when a problem is selected, when examples are collected, when labels are assigned, when variables are chosen or when performance is measured using an unsuitable benchmark. This is why an AI project should examine the entire process rather than searching for bias only after deployment."
        },
        {
          "type": "keypoint",
          "title": "Key Point 5",
          "items": [
            "Bias is not created only by the final algorithm.",
            "Connect this idea to the relevant stage, domain or evaluation question when applying it."
          ]
        },
        {
          "type": "paragraph",
          "title": "1.21 AI and Future Work",
          "text": "AI can change tasks within occupations without simply replacing every job. Some repetitive activities may become automated, while new responsibilities can emerge around data, system supervision, communication, design, ethics and domain expertise. Future-ready skills therefore include problem solving, critical thinking, communication, collaboration, digital literacy and the ability to learn new tools."
        },
        {
          "type": "keypoint",
          "title": "Key Point 6",
          "items": [
            "AI can change tasks within occupations without simply replacing every job.",
            "Connect this idea to the relevant stage, domain or evaluation question when applying it."
          ]
        },
        {
          "type": "paragraph",
          "title": "1.22 Responsible Decision Support",
          "text": "An AI recommendation is not automatically the final decision. In high-impact settings, people may need to review the evidence, question unusual outputs and provide a route for correction. Human oversight is especially important when an error could affect safety, rights, education, health, employment or access to essential services."
        },
        {
          "type": "keypoint",
          "title": "Key Point 7",
          "items": [
            "An AI recommendation is not automatically the final decision.",
            "Connect this idea to the relevant stage, domain or evaluation question when applying it."
          ]
        },
        {
          "type": "paragraph",
          "title": "1.23 A Smart System Is a System With a Purpose",
          "text": "The word smart can describe many technologies, but a useful analysis begins by identifying the purpose. A smart classroom, for example, may contain sensors, dashboards, automated controls and recommendation tools. Each component should be evaluated separately: what information enters it, what processing occurs, what output is generated and what happens when the output is wrong?"
        },
        {
          "type": "keypoint",
          "title": "Key Point 8",
          "items": [
            "The word smart can describe many technologies, but a useful analysis begins by identifying the purpose.",
            "Connect this idea to the relevant stage, domain or evaluation question when applying it."
          ]
        }
      ]
    },
    {
      "title": "Extended Topic-by-Topic Study",
      "blocks": [
        {
          "type": "paragraph",
          "title": "1.16 Intelligence, Learning and Adaptation",
          "text": "Human learning changes future decisions because experience modifies what a person knows and how that knowledge is applied. In AI, learning usually refers to an algorithm finding useful patterns or parameters from data or feedback. Adaptation should not be assumed to mean unlimited self-improvement: a deployed model normally operates within the task, data distribution and design boundaries established by its creators."
        },
        {
          "type": "keypoint",
          "title": "Key Point 1",
          "items": [
            "Human learning changes future decisions because experience modifies what a person knows and how that knowledge is applied.",
            "Connect this idea to the relevant stage, domain or evaluation question when applying it."
          ]
        },
        {
          "type": "paragraph",
          "title": "1.17 Perception, Reasoning and Action",
          "text": "Many intelligent systems can be understood as a pipeline: information is received, relevant patterns are interpreted, a decision or prediction is produced, and an action may follow. A camera provides visual input; a language interface provides text or speech; a recommendation system produces a ranked set of options. Thinking in terms of input, processing and output makes complex AI applications easier to analyse."
        },
        {
          "type": "keypoint",
          "title": "Key Point 2",
          "items": [
            "Many intelligent systems can be understood as a pipeline: information is received, relevant patterns are interpreted, a decision or prediction is produced, and an action may follow.",
            "Connect this idea to the relevant stage, domain or evaluation question when applying it."
          ]
        },
        {
          "type": "paragraph",
          "title": "1.18 Human-Machine Interaction",
          "text": "Human-machine interaction describes the ways people communicate with and receive information from computer systems. AI can make interaction more natural through speech, language, vision and personalised interfaces. At the same time, users should know when an interaction is automated, what information is being collected and how much trust should be placed in the output."
        },
        {
          "type": "keypoint",
          "title": "Key Point 3",
          "items": [
            "Human-machine interaction describes the ways people communicate with and receive information from computer systems.",
            "Connect this idea to the relevant stage, domain or evaluation question when applying it."
          ]
        },
        {
          "type": "paragraph",
          "title": "1.19 AI Access",
          "text": "Access to AI is not equal for every person or community. Differences in devices, connectivity, language resources, digital skills, cost and accessibility can affect who benefits. A responsible project considers whether the intended users can actually use the system and whether important groups are excluded from its design or data."
        },
        {
          "type": "keypoint",
          "title": "Key Point 4",
          "items": [
            "Access to AI is not equal for every person or community.",
            "Connect this idea to the relevant stage, domain or evaluation question when applying it."
          ]
        },
        {
          "type": "paragraph",
          "title": "1.20 Bias Can Begin Before Modelling",
          "text": "Bias is not created only by the final algorithm. It can enter when a problem is selected, when examples are collected, when labels are assigned, when variables are chosen or when performance is measured using an unsuitable benchmark. This is why an AI project should examine the entire process rather than searching for bias only after deployment."
        },
        {
          "type": "keypoint",
          "title": "Key Point 5",
          "items": [
            "Bias is not created only by the final algorithm.",
            "Connect this idea to the relevant stage, domain or evaluation question when applying it."
          ]
        },
        {
          "type": "paragraph",
          "title": "1.21 AI and Future Work",
          "text": "AI can change tasks within occupations without simply replacing every job. Some repetitive activities may become automated, while new responsibilities can emerge around data, system supervision, communication, design, ethics and domain expertise. Future-ready skills therefore include problem solving, critical thinking, communication, collaboration, digital literacy and the ability to learn new tools."
        },
        {
          "type": "keypoint",
          "title": "Key Point 6",
          "items": [
            "AI can change tasks within occupations without simply replacing every job.",
            "Connect this idea to the relevant stage, domain or evaluation question when applying it."
          ]
        },
        {
          "type": "paragraph",
          "title": "1.22 Responsible Decision Support",
          "text": "An AI recommendation is not automatically the final decision. In high-impact settings, people may need to review the evidence, question unusual outputs and provide a route for correction. Human oversight is especially important when an error could affect safety, rights, education, health, employment or access to essential services."
        },
        {
          "type": "keypoint",
          "title": "Key Point 7",
          "items": [
            "An AI recommendation is not automatically the final decision.",
            "Connect this idea to the relevant stage, domain or evaluation question when applying it."
          ]
        },
        {
          "type": "paragraph",
          "title": "1.23 A Smart System Is a System With a Purpose",
          "text": "The word smart can describe many technologies, but a useful analysis begins by identifying the purpose. A smart classroom, for example, may contain sensors, dashboards, automated controls and recommendation tools. Each component should be evaluated separately: what information enters it, what processing occurs, what output is generated and what happens when the output is wrong?"
        },
        {
          "type": "keypoint",
          "title": "Key Point 8",
          "items": [
            "The word smart can describe many technologies, but a useful analysis begins by identifying the purpose.",
            "Connect this idea to the relevant stage, domain or evaluation question when applying it."
          ]
        }
      ]
    }
  ]
};
