// Class 10 Artificial Intelligence — expanded information-only chapter
const ChapterData = {
  "id": "10-artificialintelligence-introduction-to-ai",
  "title": "Introduction to Artificial Intelligence",
  "file": "introduction-to-ai.js",
  "description": "A continuous, detailed study of intelligence, AI, ML, DL, AI domains, applications, smart environments and responsible AI. Expanded substantially with additional topic-by-topic explanatory content only; question, practice and unrelated revision blocks are not included.",
  "summary": "AI is a broad field concerned with intelligent capabilities in machines; the chapter develops the foundations, domains, applications and ethical responsibilities of AI. The expanded version develops the concepts, processes, representations, applications, limitations and responsible-use considerations in continuous detail.",
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
          "type": "paragraph",
          "title": "1.10 AI in Everyday Life",
          "text": "AI-related systems can be encountered in recommendation systems, voice assistants, spam filtering, translation, image search, navigation, fraud detection, accessibility tools and personalised learning. The presence of AI should be judged by the task and method rather than by marketing language. A useful learner asks: What input is being processed? What output is produced? Is the system using rules, learned patterns or both? What data influences the result?"
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
          "type": "paragraph",
          "title": "1.15 Advantages and Limitations of AI",
          "text": "AI can process large amounts of information quickly, identify patterns, automate repetitive tasks, support accessibility and assist decision making. However, AI can also make errors, inherit bias, require large or high-quality datasets, reduce transparency in some systems, create privacy concerns and change the nature of work. AI should therefore be viewed as a tool whose benefits depend on its design, data, context and human oversight."
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
    },
    {
      "title": "Expanded Topic-by-Topic Chapter Content",
      "blocks": [
        {
          "type": "paragraph",
          "title": "1.9 Intelligence as a Set of Capabilities",
          "text": "Intelligence is better understood as a collection of capabilities rather than a single measurable ability. Perception allows an agent to obtain information from its surroundings; learning allows it to improve from experience or examples; reasoning allows it to connect facts and rules; language allows it to communicate with people; planning helps it select a sequence of actions; and decision making connects available information with a goal. AI systems may implement one or several of these capabilities without reproducing the complete range of human intelligence."
        },
        {
          "type": "paragraph",
          "title": "1.10 Intelligent Agents",
          "text": "An intelligent agent is a system that receives information from an environment through inputs or sensors, processes that information and produces actions or outputs. For example, a navigation application receives location and map information, processes possible routes and produces route guidance. The quality of an agent depends on what it can observe, how accurately it represents the problem, what objective it is given and how effectively it chooses an action."
        },
        {
          "type": "paragraph",
          "title": "1.11 Environment and Context",
          "text": "The environment is the surrounding situation in which an AI system operates. An environment may be predictable or uncertain, static or changing, fully observable or only partly observable. A chess program has a structured environment with clearly defined rules, while a road-traffic system has changing conditions, incomplete information and many independent participants. Understanding the environment helps determine what kind of AI approach is appropriate."
        },
        {
          "type": "paragraph",
          "title": "1.12 Perception and Representation",
          "text": "Before a system can reason about information, the information must be represented in a form that a computer can process. Images may be represented as pixels and numerical colour values, text as characters or tokens, and structured records as fields and values. Representation is important because an algorithm can only operate on the information that has been encoded and supplied to it."
        },
        {
          "type": "paragraph",
          "title": "1.13 Pattern Recognition",
          "text": "Pattern recognition is the identification of regularities in data. A pattern may be visual, numerical, linguistic or behavioural. For example, an image classifier can learn that certain combinations of shapes and colours are common in examples belonging to a particular category. Pattern recognition does not mean that the system understands an object exactly as a human does; it means that the model has learned a useful relationship between input patterns and outputs."
        },
        {
          "type": "paragraph",
          "title": "1.14 Learning from Examples",
          "text": "In a learning-based AI system, examples provide evidence from which a model can discover relationships. The examples should represent the situations in which the model will later be used. If training examples are incomplete, biased or poorly labelled, the resulting model may perform poorly even when the algorithm itself is technically correct. Thus, data quality is part of intelligent system design."
        },
        {
          "type": "paragraph",
          "title": "1.15 Rules and Learning",
          "text": "AI systems can use explicit rules, learned patterns, or a combination of both. A rule-based system may contain statements such as a condition followed by an action. A learning-based system estimates patterns from data. Rules are often easier to inspect directly, while learned models can handle complex patterns that would be difficult to describe with thousands of manually written rules."
        },
        {
          "type": "paragraph",
          "title": "1.16 Artificial Intelligence and Human Intelligence",
          "text": "Human intelligence is flexible and general: people can transfer knowledge between many unrelated tasks, use common sense and understand social context. Most practical AI systems are specialised. A model trained to identify objects in images does not automatically know how to write a poem, diagnose a machine fault or plan a journey. This distinction explains why task-specific AI should not be confused with human-level general intelligence."
        },
        {
          "type": "paragraph",
          "title": "1.17 Narrow or Task-Specific AI",
          "text": "Narrow AI is designed for a defined task or a limited group of related tasks. Examples include recommendation systems, speech recognition, spam filtering, image classification and route optimisation. Such systems can be extremely capable within their designed domain while remaining unable to perform unrelated tasks without additional models, data and engineering."
        },
        {
          "type": "paragraph",
          "title": "1.18 AI, Data and Computation",
          "text": "Modern AI often depends on three connected resources: data, algorithms and computation. Data provides examples or evidence; algorithms define how information is processed or how a model is trained; computation supplies the resources needed to perform that processing. Improving one resource does not automatically solve every problem. Large amounts of poor-quality data, for example, cannot guarantee a useful result."
        },
        {
          "type": "paragraph",
          "title": "1.19 Machine Learning: Core Idea",
          "text": "Machine learning focuses on methods that allow a system to learn a relationship from data rather than requiring every relationship to be manually programmed. During training, an algorithm adjusts a model according to examples and an objective. During use, the trained model receives new input and produces an output. The model therefore becomes a computational representation of patterns discovered from the training process."
        },
        {
          "type": "paragraph",
          "title": "1.20 Supervised Learning",
          "text": "Supervised learning uses examples in which the desired output is known. A dataset may contain photographs with their correct categories, or measurements with known numerical outcomes. The model learns a mapping between inputs and target outputs. Classification predicts a category, while regression predicts a numerical value. The usefulness of the model depends on the quality and representativeness of the labelled examples."
        },
        {
          "type": "paragraph",
          "title": "1.21 Unsupervised Learning",
          "text": "Unsupervised learning works with data where a target label is not supplied in the same way as supervised learning. The system can search for structure, similarity or groups within the data. Clustering is a common example: records with similar characteristics can be grouped together. The groups are meaningful only when they correspond to a useful structure in the problem being studied."
        },
        {
          "type": "paragraph",
          "title": "1.22 Reinforcement Learning",
          "text": "Reinforcement learning involves an agent interacting with an environment and receiving feedback associated with its actions. The agent aims to learn a policy that produces useful long-term outcomes. The feedback is often described using rewards and penalties. Unlike supervised learning, the system is not simply given the correct action for every situation; it learns through interaction and consequences."
        },
        {
          "type": "paragraph",
          "title": "1.23 Deep Learning and Neural Networks",
          "text": "A neural network is a computational model made from connected processing units arranged in layers. During learning, numerical parameters called weights are adjusted so that the network produces useful outputs. Deep learning uses neural networks with multiple layers, allowing the system to learn hierarchical representations. Early layers may capture simpler patterns while later layers combine them into more complex representations."
        },
        {
          "type": "paragraph",
          "title": "1.24 Data as the Foundation of AI",
          "text": "Data can be numerical, categorical, textual, visual, audio, video or sensor-based. It may be collected directly, obtained from existing records, generated through sensors or created through human annotation. For AI, data must be relevant to the task. A model trained on data that does not reflect the real operating environment may learn relationships that fail when exposed to new cases."
        },
        {
          "type": "paragraph",
          "title": "1.25 Training, Validation and Testing",
          "text": "A model should be evaluated on data that provides evidence about how it behaves beyond the examples used for learning. Training data is used to learn model parameters. Validation data can support model selection or tuning. Test data provides a final independent check of performance. Keeping these roles separate helps reveal whether a model has learned general patterns or merely fitted the training examples."
        },
        {
          "type": "paragraph",
          "title": "1.26 Overfitting and Generalisation",
          "text": "Overfitting occurs when a model becomes too closely adapted to the training examples and loses performance on new data. Generalisation means performing effectively on unseen cases from the same intended problem setting. The goal is not to memorise every training example but to learn patterns that remain useful when the input changes within reasonable limits."
        },
        {
          "type": "paragraph",
          "title": "1.27 AI Domains: Data",
          "text": "The data domain focuses on collecting, organising, analysing and using data to discover patterns or support decisions. Data may be structured, such as tables of records, or unstructured, such as text, images and audio. AI systems can use data analysis to identify trends, classify records, forecast values and support recommendations."
        },
        {
          "type": "paragraph",
          "title": "1.28 AI Domains: Computer Vision",
          "text": "Computer Vision enables computers to process and interpret visual information. Its tasks can include image classification, object detection, image segmentation, face or feature analysis and visual inspection. A digital image is represented numerically, allowing algorithms to operate on pixels and learned visual patterns."
        },
        {
          "type": "paragraph",
          "title": "1.29 AI Domains: Natural Language Processing",
          "text": "Natural Language Processing focuses on interactions between computers and human language. NLP can be used for text classification, translation, speech-related systems, question answering, summarisation, sentiment analysis and conversational interfaces. Language is challenging because meaning depends on context, word relationships, grammar, ambiguity and the situation in which a statement is used."
        },
        {
          "type": "paragraph",
          "title": "1.30 AI Applications in Everyday Systems",
          "text": "AI can be found in recommendation systems, search ranking, fraud detection, predictive maintenance, medical image analysis, navigation, speech interfaces, translation, customer-support systems and content moderation. In each case, the AI component performs a defined computational task; the surrounding application also includes software rules, databases, interfaces and human decisions."
        },
        {
          "type": "paragraph",
          "title": "1.31 Recommendation Systems",
          "text": "A recommendation system estimates which items may be useful or interesting to a user. It can use information about previous interactions, item characteristics or patterns among many users. Recommendations are predictions rather than guarantees. A responsible system should consider relevance, privacy, transparency and the possibility that repeated recommendations can narrow the range of information a person encounters."
        },
        {
          "type": "paragraph",
          "title": "1.32 AI in Healthcare",
          "text": "AI can assist healthcare by analysing medical images, identifying patterns in clinical data, supporting workflow and helping with risk prediction. Such systems must be treated as decision-support tools when human expertise and clinical responsibility are required. Sensitive health information also requires strong privacy and security safeguards."
        },
        {
          "type": "paragraph",
          "title": "1.33 AI in Agriculture",
          "text": "Agricultural AI applications can analyse satellite or drone imagery, estimate crop conditions, identify signs of stress, support irrigation decisions and assist yield prediction. The quality of such systems depends on local conditions, crop type, weather, soil characteristics and the quality of the data used to build the model."
        },
        {
          "type": "paragraph",
          "title": "1.34 AI in Education",
          "text": "AI can support education through adaptive learning, automated feedback, language assistance, accessibility tools and analysis of learning patterns. Educational use should preserve the learner’s role in thinking and creating. Systems must also avoid unfairly labelling students on the basis of incomplete data or treating predictions as unquestionable judgements."
        },
        {
          "type": "paragraph",
          "title": "1.35 Bias in AI Systems",
          "text": "Bias can enter an AI system through the problem definition, data collection, labels, sampling, feature choices, model design or interpretation of results. If important groups are poorly represented in training data, performance may differ across groups. Reducing bias therefore requires attention throughout the AI development process rather than only after a model has been deployed."
        },
        {
          "type": "paragraph",
          "title": "1.36 Privacy and Data Protection",
          "text": "AI systems can process personal information at a large scale. Privacy concerns arise when data is collected without appropriate justification, used for purposes beyond what people expect, retained unnecessarily or exposed through weak security. Responsible AI development considers data minimisation, access control, secure storage and appropriate consent or lawful basis where applicable."
        },
        {
          "type": "paragraph",
          "title": "1.37 Transparency and Explainability",
          "text": "Transparency means providing understandable information about how an AI system is designed, what data it uses, what it is intended to do and what its limitations are. Explainability concerns the ability to give meaningful reasons for a model’s output. The appropriate level of explanation depends on the application and the people affected by the decision."
        },
        {
          "type": "paragraph",
          "title": "1.38 Human Oversight",
          "text": "Human oversight means that people remain able to inspect, question, correct or override AI-supported decisions when necessary. This is particularly important when errors can cause serious harm. An AI output should be treated as evidence generated by a system, not automatically as an unquestionable fact."
        },
        {
          "type": "paragraph",
          "title": "1.39 Responsible Use of AI",
          "text": "Responsible AI combines technical performance with fairness, safety, privacy, transparency, accountability and appropriate human control. A technically accurate model can still be inappropriate if it is used for the wrong purpose, trained on unsuitable data or deployed without safeguards. Responsible use therefore begins before the model is built and continues throughout its life cycle."
        },
        {
          "type": "paragraph",
          "title": "1.40 Goal-Oriented Behaviour",
          "text": "An AI system normally operates with an objective: classify an input, predict a value, recommend an item, recognise an object or select an action. The same input can lead to different appropriate outputs when the goal changes. Defining the objective precisely is therefore essential before choosing data or algorithms."
        },
        {
          "type": "paragraph",
          "title": "1.41 Inputs, Processing and Outputs",
          "text": "A useful way to understand an AI application is to separate inputs, processing and outputs. Inputs are observations or data, processing transforms those inputs through rules or a model, and outputs are predictions, classifications, recommendations or actions. Real applications may also include feedback, storage, human review and external tools around this core flow."
        },
        {
          "type": "paragraph",
          "title": "1.42 Features as Information",
          "text": "Features are measurable characteristics used to describe an input for a model. In a student-performance example, attendance, study time and previous marks might be features. A feature is useful when it contains information related to the target and is available in a suitable form at the time a prediction must be made."
        },
        {
          "type": "paragraph",
          "title": "1.43 Data Representation Affects AI",
          "text": "The same real-world object can be represented in many ways. A photograph can be represented by pixel arrays, text can be represented by tokens or vectors, and a customer record can be represented by numerical and categorical fields. The representation determines what information is visible to the algorithm and what relationships it can potentially learn."
        },
        {
          "type": "paragraph",
          "title": "1.44 Algorithm and Model",
          "text": "An algorithm is a procedure used to perform computation or learning, whereas a model is the learned or configured representation produced for a particular task. During training, an algorithm may use data to determine model parameters. During inference, the trained model is applied to new input to produce an output."
        },
        {
          "type": "paragraph",
          "title": "1.45 Inference",
          "text": "Inference is the process of using a trained AI model to generate an output for new input. Training and inference are different stages: training adjusts model parameters using examples, while inference uses the resulting parameters without performing the same learning process for every new input."
        },
        {
          "type": "paragraph",
          "title": "1.46 Feedback Loops",
          "text": "Some AI applications receive feedback from their own outputs or from users. A recommendation system may learn from clicks, while a predictive maintenance system may receive later evidence about whether a failure occurred. Feedback can improve a system, but poorly designed feedback can also reinforce existing bias or errors."
        },
        {
          "type": "paragraph",
          "title": "1.47 Data Quality Dimensions",
          "text": "Data quality can be considered through dimensions such as accuracy, completeness, consistency, timeliness, relevance and representativeness. A dataset may be accurate but too old, complete but irrelevant, or large but poorly representative. AI development therefore requires judgement about the suitability of data, not just its quantity."
        },
        {
          "type": "paragraph",
          "title": "1.48 Model Limitations",
          "text": "Every model has a domain in which its assumptions and training data make sense. Outside that domain, performance may decrease. A responsible AI system should communicate its intended use and limitations so that users do not assume that success on one task guarantees competence on another."
        },
        {
          "type": "paragraph",
          "title": "1.49 AI as a Socio-Technical System",
          "text": "An AI application is more than its model. People define the problem, collect data, label examples, choose thresholds, interpret outputs and decide what action follows. Software infrastructure stores and transports information, while organisational rules determine how the system is used. AI outcomes therefore depend on technical and human components together."
        },
        {
          "type": "paragraph",
          "title": "1.50 Automation, Augmentation and Decision Support",
          "text": "AI can automate a task, augment a person’s abilities or provide decision support. Automation performs an action with limited human intervention. Augmentation assists a person while leaving meaningful control with them. Decision support provides information or predictions that a human considers before acting. The appropriate arrangement depends on the risks and purpose of the application."
        },
        {
          "type": "paragraph",
          "title": "1.51 Generative AI and Predictive AI",
          "text": "Predictive AI generally estimates a class, value or probability from input data. Generative AI produces new content such as text, images, audio or other data-like outputs based on learned patterns. The two categories can overlap in applications, but their outputs and evaluation requirements are different."
        },
        {
          "type": "paragraph",
          "title": "1.52 AI Systems and Uncertainty",
          "text": "Many real-world inputs do not provide enough information for absolute certainty. AI systems may therefore produce probabilities, scores or ranked possibilities. Users must understand that a high score is not automatically a guarantee. Uncertainty should be interpreted in relation to the model, data and task."
        },
        {
          "type": "paragraph",
          "title": "1.53 Lifecycle of an AI System",
          "text": "An AI system has a lifecycle that can include problem definition, data collection, preparation, model development, evaluation, deployment, monitoring, updating and eventual retirement. Performance and risks can change at any stage. Treating deployment as the end of the project ignores changes that occur when the system meets real users and new data."
        },
        {
          "type": "paragraph",
          "title": "1.54 Foundations for Later AI Study",
          "text": "The ideas of data, representation, models, learning, domains, evaluation and responsible use provide the foundation for later study of computer vision, natural language processing and the AI project cycle. Each specialised area applies the same broad reasoning process to different kinds of information."
        }
      ]
    }
  ]
};
