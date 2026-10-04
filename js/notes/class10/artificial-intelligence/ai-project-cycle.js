// Class 10 Artificial Intelligence — ultra-detailed continuous chapter
const ChapterData = {
  "id": "10-artificialintelligence-ai-project-cycle",
  "title": "AI Project Cycle",
  "file": "ai-project-cycle.js",
  "description": "A continuous, detailed chapter on problem scoping, data acquisition, data exploration, modelling and evaluation.",
  "summary": "The AI Project Cycle provides a structured and iterative route from a real-world problem to a tested AI solution.",
  "sections": [
    {
      "title": "The AI Project Cycle",
      "blocks": [
        {
          "type": "paragraph",
          "title": "2.1 Why an AI Project Needs a Cycle",
          "text": "An AI solution is not created by jumping directly from an idea to a trained model. A project begins with a real problem, identifies the people and conditions involved, determines what information is required, explores that information, develops an appropriate model and evaluates the result. The AI Project Cycle provides a structured sequence for moving through these stages. Because learning from data can reveal new information about the original problem, the process is iterative rather than permanently one-way."
        },
        {
          "type": "data",
          "title": "2.2 Five Stages of the AI Project Cycle",
          "headers": [
            "Stage",
            "Main purpose"
          ],
          "rows": [
            [
              "Problem Scoping",
              "Define the problem, goal, stakeholders and boundaries"
            ],
            [
              "Data Acquisition",
              "Obtain relevant and reliable data"
            ],
            [
              "Data Exploration",
              "Understand, organise and visualise the data"
            ],
            [
              "Modelling",
              "Build a system or model to solve the task"
            ],
            [
              "Evaluation",
              "Measure performance and judge whether the solution is useful"
            ]
          ],
          "text": ""
        },
        {
          "type": "exam",
          "title": "Exam Focus",
          "question": "Name the five stages of the AI Project Cycle.",
          "answer": "The five stages are Problem Scoping, Data Acquisition, Data Exploration, Modelling and Evaluation."
        },
        {
          "type": "comic",
          "title": "Comic: Surya starts a project",
          "dialogues": [
            {
              "character": "Surya",
              "dialogue": "I want to make an AI system to reduce water wastage in school."
            },
            {
              "character": "Verma Sir",
              "dialogue": "Good idea. First tell me exactly what problem you want the system to solve."
            },
            {
              "character": "Surya",
              "dialogue": "So I should not start by choosing a model?"
            },
            {
              "character": "Verma Sir",
              "dialogue": "Correct. A clear problem and goal come before the technical solution."
            }
          ]
        },
        {
          "type": "paragraph",
          "title": "2.3 Problem Scoping: Defining the Real Problem",
          "text": "Problem scoping converts a broad concern into a specific, manageable AI problem. A statement such as “make the school better” is too broad. A statement such as “predict periods of unusually high water consumption from past meter readings and relevant conditions” is more specific. A well-scoped problem states what needs to be improved, who is affected, what outcome is desired and what limits apply."
        },
        {
          "type": "paragraph",
          "title": "2.4 Goal Setting",
          "text": "The project goal should be clear enough that progress can later be measured. It should identify the desired outcome rather than merely describe an activity. For example, “collect water data” is an activity, whereas “identify periods when water consumption is unusually high so that the school can investigate possible wastage” describes a useful outcome. A good goal also avoids promising more than the available data and technology can support."
        },
        {
          "type": "paragraph",
          "title": "2.5 Stakeholders",
          "text": "Stakeholders are people or groups who are affected by the problem, contribute information, use the solution or are responsible for decisions related to it. In a school water-management project, stakeholders may include students, teachers, maintenance staff, school management and the people responsible for water supply. Identifying them helps reveal different needs and possible risks."
        },
        {
          "type": "paragraph",
          "title": "2.6 The 4Ws Problem Canvas",
          "text": "A practical way to structure problem scoping is to ask four connected questions: Who is affected? What is the problem? Where does it occur? Why does solving it matter? These questions prevent the project team from selecting a technical solution before understanding the context. The answers can be refined as new evidence appears."
        },
        {
          "type": "data",
          "title": "2.7 4Ws Example",
          "headers": [
            "4W",
            "Example for a school water project"
          ],
          "rows": [
            [
              "Who?",
              "Students, staff, maintenance team and school management"
            ],
            [
              "What?",
              "Unusual or avoidable water consumption"
            ],
            [
              "Where?",
              "School building, washrooms, gardens and other water-use points"
            ],
            [
              "Why?",
              "Reduce wastage, conserve water and support responsible resource use"
            ]
          ],
          "text": ""
        },
        {
          "type": "exam",
          "title": "Long Answer",
          "question": "What is problem scoping and why is it important?",
          "answer": "Problem scoping is the process of defining the problem, desired goal, stakeholders, context and constraints before building an AI solution. It is important because a poorly defined problem can lead to irrelevant data, unsuitable models and a solution that does not address the actual need."
        },
        {
          "type": "practice",
          "title": "Apply the 4Ws",
          "question": "A school wants to predict which library books may be in high demand next month. Identify the four Ws.",
          "answer": "Who: students and library staff. What: predicting demand for books. Where: the school library and its borrowing records. Why: to plan availability and purchasing or redistribution of books."
        },
        {
          "type": "paragraph",
          "title": "2.8 Sustainable Development Goals and Problem Choice",
          "text": "AI projects can be connected to broader social and environmental goals. When selecting a problem, learners should consider whether the proposed solution supports a meaningful need such as education, health, clean water, responsible consumption or sustainable communities. The connection should be genuine: the project must address a real aspect of the chosen goal rather than simply attaching a goal label to an unrelated activity."
        },
        {
          "type": "paragraph",
          "title": "2.9 Data Requirements",
          "text": "Once the problem is clear, the team asks what data is needed. Data requirements include the features or variables to be collected, their format, quantity, time period, frequency and source. If the project predicts water consumption, useful variables could include previous consumption, date, time, number of users and perhaps weather conditions if they have a defensible relationship with the target."
        },
        {
          "type": "paragraph",
          "title": "2.10 Data Acquisition",
          "text": "Data acquisition means obtaining the data required for the project. Data may be collected directly through surveys, observations, sensors, records or experiments, or obtained from reliable existing datasets. The source should be relevant and trustworthy. The team should also consider permission, privacy, consent, copyright and whether the data represents the population or situation for which the model will be used."
        },
        {
          "type": "comic",
          "title": "Comic: Enough data?",
          "dialogues": [
            {
              "character": "Ansh",
              "dialogue": "I found a dataset with only ten examples."
            },
            {
              "character": "Surya",
              "dialogue": "Ten examples may be too few for the problem. What cases do they represent?"
            },
            {
              "character": "Sharma Sir",
              "dialogue": "Exactly. Quantity is important, but relevance and representation matter too."
            },
            {
              "character": "Ansh",
              "dialogue": "Then I should check the source and coverage before modelling."
            }
          ]
        },
        {
          "type": "data",
          "title": "2.11 Data Quality Checklist",
          "headers": [
            "Question",
            "What to inspect"
          ],
          "rows": [
            [
              "Relevance",
              "Does the data describe the problem?"
            ],
            [
              "Completeness",
              "Are important fields missing?"
            ],
            [
              "Consistency",
              "Are units and formats consistent?"
            ],
            [
              "Accuracy",
              "Are recorded values plausible and reliable?"
            ],
            [
              "Representation",
              "Does the dataset cover important groups and situations?"
            ],
            [
              "Source",
              "Can the origin and collection method be verified?"
            ]
          ],
          "text": ""
        },
        {
          "type": "exam",
          "title": "Exam Focus",
          "question": "What factors should be considered while acquiring data?",
          "answer": "The project team should consider relevance, reliability, quantity, completeness, consistency, representation, source, collection method, privacy, permission and the frequency at which data needs to be collected."
        },
        {
          "type": "paragraph",
          "title": "2.12 Data Exploration",
          "text": "Data exploration is the stage in which the acquired data is inspected to understand what it contains. The team can calculate simple summaries, identify missing values, compare categories and look for unusual observations. Visualisation makes patterns easier to see and can reveal relationships that are difficult to notice in a raw table."
        },
        {
          "type": "paragraph",
          "title": "2.13 Choosing a Graph",
          "text": "The type of graph should match the question. A bar chart is useful for comparing categories. A line graph is suitable for showing change over time. A pie chart can show proportions when categories form a meaningful whole, although too many slices make it difficult to read. A scatter plot can help inspect the relationship between two numerical variables. The purpose of a graph is to communicate a pattern, not merely to decorate a report."
        },
        {
          "type": "data",
          "title": "2.14 Common Graphs",
          "headers": [
            "Graph",
            "Useful for"
          ],
          "rows": [
            [
              "Bar graph",
              "Comparing categories"
            ],
            [
              "Line graph",
              "Trends over time"
            ],
            [
              "Pie chart",
              "Parts of a whole"
            ],
            [
              "Scatter plot",
              "Relationship between two numerical variables"
            ],
            [
              "Histogram",
              "Distribution of numerical values"
            ]
          ],
          "text": ""
        },
        {
          "type": "paragraph",
          "title": "2.15 Modelling",
          "text": "Modelling is the stage in which the project creates a system that can produce an output for the defined task. The choice of modelling approach depends on the problem, data and desired output. A rule-based approach uses explicit conditions. A learning-based approach learns patterns from examples. The project team must understand what the model is expected to learn or decide and what information will be supplied to it."
        },
        {
          "type": "paragraph",
          "title": "2.16 Rule-Based and Learning-Based Approaches",
          "text": "In a rule-based system, the developer specifies conditions and corresponding actions. For example, a simple school alert system might issue a warning when a sensor reading crosses a predefined threshold. In a learning-based system, examples are used to learn a relationship between inputs and outputs. The latter can be useful when the relationship is difficult to write as a complete set of rules."
        },
        {
          "type": "paragraph",
          "title": "2.17 Supervised Learning",
          "text": "Supervised learning uses labelled examples. Each training example contains input information and a known target or label. The model learns a relationship that can later be used to predict labels for new inputs. Classification is a common supervised task in which outputs are categories, such as “spam” and “not spam”."
        },
        {
          "type": "paragraph",
          "title": "2.18 Unsupervised Learning",
          "text": "Unsupervised learning works with data without predefined target labels. The system looks for structure, such as groups or clusters, within the data. For example, customers might be grouped according to patterns in their behaviour without first assigning them to named categories."
        },
        {
          "type": "paragraph",
          "title": "2.19 Reinforcement Learning",
          "text": "Reinforcement learning is based on interaction with an environment. An agent takes actions and receives feedback in the form of rewards or penalties. Over time, it learns a strategy that aims to maximise cumulative reward. This differs from supervised learning because the system is not simply given a correct label for every action."
        },
        {
          "type": "data",
          "title": "2.20 Learning Approaches Compared",
          "headers": [
            "Approach",
            "Training information",
            "Typical task"
          ],
          "rows": [
            [
              "Supervised",
              "Labelled examples",
              "Classification or prediction"
            ],
            [
              "Unsupervised",
              "Unlabelled data",
              "Finding groups or structure"
            ],
            [
              "Reinforcement",
              "Rewards or penalties from interaction",
              "Learning action strategies"
            ]
          ],
          "text": ""
        },
        {
          "type": "exam",
          "title": "Long Answer",
          "question": "Differentiate supervised, unsupervised and reinforcement learning.",
          "answer": "Supervised learning learns from labelled examples. Unsupervised learning works with unlabelled data to discover patterns or groups. Reinforcement learning learns through interaction with an environment using rewards or penalties to improve action choices."
        },
        {
          "type": "paragraph",
          "title": "2.21 Decision Trees",
          "text": "A decision tree represents a sequence of decisions as a tree-like structure. Internal nodes contain questions or conditions, branches represent possible outcomes and leaf nodes represent final predictions or decisions. Decision trees are useful for classification and can be explained as a chain of choices. The quality of a tree depends on the data, selected features and how the splits are constructed."
        },
        {
          "type": "data",
          "title": "2.22 Simple Decision Tree Example",
          "headers": [
            "Question",
            "Yes branch",
            "No branch"
          ],
          "rows": [
            [
              "Is the ground wet?",
              "Was there rain?",
              "Check another reason"
            ],
            [
              "Was there rain?",
              "Likely rain-related",
              "Possible leak or other source"
            ],
            [
              "Final decision",
              "Investigate rain effects",
              "Investigate alternatives"
            ]
          ],
          "text": ""
        },
        {
          "type": "paragraph",
          "title": "2.23 Pixels and Handwritten Characters",
          "text": "For an image-based task, a computer represents an image as numerical information. A digital image is made of pixels, and the pixel values can be analysed as patterns. In a simple handwritten-character example, letters can be represented by grids of pixels. A model can learn recurring patterns across examples and then use those patterns to classify new images."
        },
        {
          "type": "paragraph",
          "title": "2.24 Evaluation Completes the Cycle",
          "text": "Evaluation checks whether the model actually meets the project goal. A model that appears impressive during development may fail on new data. Evaluation therefore uses suitable measures and evidence to judge performance. If results are unsatisfactory, the team may return to an earlier stage, improve the data, revise the problem definition, change the model or reconsider the intended output."
        },
        {
          "type": "comic",
          "title": "Comic: The cycle is iterative",
          "dialogues": [
            {
              "character": "Surya",
              "dialogue": "Our model is only accurate for clear handwriting."
            },
            {
              "character": "Verma Sir",
              "dialogue": "Then what did the evaluation reveal?"
            },
            {
              "character": "Surya",
              "dialogue": "That our examples were too limited and did not represent different writing styles."
            },
            {
              "character": "Verma Sir",
              "dialogue": "Good. Use that evidence to improve an earlier stage. The cycle can repeat."
            }
          ]
        },
        {
          "type": "exam",
          "title": "Final Revision",
          "question": "Why is the AI Project Cycle called iterative?",
          "answer": "It is iterative because evaluation can reveal weaknesses in the problem definition, data or model. The team can return to an earlier stage, make improvements and evaluate the revised solution again."
        }
      ]
    },
    {
      "title": "Extended Board-Style Revision and Application",
      "blocks": [
        {
          "type": "exam",
          "title": "Board Revision 1",
          "question": "What is problem scoping?",
          "answer": "Problem scoping defines the problem, goal, stakeholders and boundaries."
        },
        {
          "type": "paragraph",
          "title": "Application Note 1",
          "text": "In an examination or project, connect the definition to the purpose, describe the process in the correct order, and use a concrete example to show that the concept has been understood. The exact application should remain consistent with the problem being discussed."
        },
        {
          "type": "exam",
          "title": "Board Revision 2",
          "question": "What are stakeholders?",
          "answer": "Stakeholders are people or groups affected by, contributing to or using the project."
        },
        {
          "type": "paragraph",
          "title": "Application Note 2",
          "text": "In an examination or project, connect the definition to the purpose, describe the process in the correct order, and use a concrete example to show that the concept has been understood. The exact application should remain consistent with the problem being discussed."
        },
        {
          "type": "exam",
          "title": "Board Revision 3",
          "question": "Why is data quality important?",
          "answer": "Poor-quality data can produce unreliable patterns and predictions."
        },
        {
          "type": "paragraph",
          "title": "Application Note 3",
          "text": "In an examination or project, connect the definition to the purpose, describe the process in the correct order, and use a concrete example to show that the concept has been understood. The exact application should remain consistent with the problem being discussed."
        },
        {
          "type": "exam",
          "title": "Board Revision 4",
          "question": "Compare supervised and unsupervised learning.",
          "answer": "Supervised learning uses labelled examples; unsupervised learning finds patterns in unlabelled data."
        },
        {
          "type": "paragraph",
          "title": "Application Note 4",
          "text": "In an examination or project, connect the definition to the purpose, describe the process in the correct order, and use a concrete example to show that the concept has been understood. The exact application should remain consistent with the problem being discussed."
        },
        {
          "type": "exam",
          "title": "Board Revision 5",
          "question": "What is the role of modelling?",
          "answer": "Modelling creates a system that maps inputs to useful outputs for the chosen task."
        },
        {
          "type": "paragraph",
          "title": "Application Note 5",
          "text": "In an examination or project, connect the definition to the purpose, describe the process in the correct order, and use a concrete example to show that the concept has been understood. The exact application should remain consistent with the problem being discussed."
        },
        {
          "type": "exam",
          "title": "Board Revision 6",
          "question": "Why is the cycle iterative?",
          "answer": "Evaluation may reveal weaknesses that require returning to earlier stages."
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
          "title": "2.22 Constraints in Problem Scoping",
          "text": "Every project has constraints such as available time, budget, data, computing resources, permissions and technical expertise. A good problem scope recognises these limits. Narrowing a problem is not failure; it is often what makes a project measurable and achievable."
        },
        {
          "type": "keypoint",
          "title": "Key Point 1",
          "items": [
            "Every project has constraints such as available time, budget, data, computing resources, permissions and technical expertise.",
            "Connect this idea to the relevant stage, domain or evaluation question when applying it."
          ]
        },
        {
          "type": "paragraph",
          "title": "2.23 From Broad Theme to AI Goal",
          "text": "A theme such as “healthy school” can produce many possible problems: monitoring cafeteria waste, identifying patterns in attendance, planning physical activity or improving access to information. The team should compare possible problems against stakeholders, available data, feasibility and expected impact before selecting one goal."
        },
        {
          "type": "keypoint",
          "title": "Key Point 2",
          "items": [
            "A theme such as “healthy school” can produce many possible problems: monitoring cafeteria waste, identifying patterns in attendance, planning physical activity or improving access to information.",
            "Connect this idea to the relevant stage, domain or evaluation question when applying it."
          ]
        },
        {
          "type": "paragraph",
          "title": "2.24 Reliable Data Sources",
          "text": "A data source is more useful when its origin, collection method, time period and meaning are clear. Secondary data should be checked for licensing and relevance. Data gathered directly should use a consistent method. A project should not treat a convenient dataset as automatically trustworthy."
        },
        {
          "type": "keypoint",
          "title": "Key Point 3",
          "items": [
            "A data source is more useful when its origin, collection method, time period and meaning are clear.",
            "Connect this idea to the relevant stage, domain or evaluation question when applying it."
          ]
        },
        {
          "type": "paragraph",
          "title": "2.25 Frequency of Data Collection",
          "text": "Some problems change rapidly and require frequent observations; others change slowly. The required collection frequency depends on the phenomenon being studied and the decision the model supports. Collecting data too rarely can miss important patterns, while collecting unnecessary data can increase cost and privacy risk."
        },
        {
          "type": "keypoint",
          "title": "Key Point 4",
          "items": [
            "Some problems change rapidly and require frequent observations; others change slowly.",
            "Connect this idea to the relevant stage, domain or evaluation question when applying it."
          ]
        },
        {
          "type": "paragraph",
          "title": "2.26 Missing Data",
          "text": "Missing values can arise because a sensor failed, a person skipped a survey question, a record was not created or two sources use different formats. The project team should identify missingness before modelling and decide whether values can be recovered, excluded or handled through an appropriate method. The decision should be documented because it can influence results."
        },
        {
          "type": "keypoint",
          "title": "Key Point 5",
          "items": [
            "Missing values can arise because a sensor failed, a person skipped a survey question, a record was not created or two sources use different formats.",
            "Connect this idea to the relevant stage, domain or evaluation question when applying it."
          ]
        },
        {
          "type": "paragraph",
          "title": "2.27 Visualisation as a Reasoning Tool",
          "text": "A graph is not only a presentation device. During exploration, visualisation can help reveal trends, clusters, outliers and unexpected relationships. A graph should be labelled clearly and should not exaggerate differences through misleading scales or unnecessary decoration."
        },
        {
          "type": "keypoint",
          "title": "Key Point 6",
          "items": [
            "A graph is not only a presentation device.",
            "Connect this idea to the relevant stage, domain or evaluation question when applying it."
          ]
        },
        {
          "type": "paragraph",
          "title": "2.28 Features and Labels",
          "text": "In a supervised learning problem, features are input characteristics used by the model, while the label or target is the output the model is expected to predict. Choosing useful features requires understanding the problem. A feature that leaks information from the future or directly reveals the target can make evaluation misleading."
        },
        {
          "type": "keypoint",
          "title": "Key Point 7",
          "items": [
            "In a supervised learning problem, features are input characteristics used by the model, while the label or target is the output the model is expected to predict.",
            "Connect this idea to the relevant stage, domain or evaluation question when applying it."
          ]
        },
        {
          "type": "paragraph",
          "title": "2.29 Model Choice Follows the Problem",
          "text": "The model should be selected after understanding the task rather than because a particular algorithm is fashionable. Classification, regression, clustering and decision-making problems can require different approaches. Simpler models can be preferable when they are sufficient, understandable and easier to evaluate."
        },
        {
          "type": "keypoint",
          "title": "Key Point 8",
          "items": [
            "The model should be selected after understanding the task rather than because a particular algorithm is fashionable.",
            "Connect this idea to the relevant stage, domain or evaluation question when applying it."
          ]
        },
        {
          "type": "paragraph",
          "title": "2.30 Improvement Through Iteration",
          "text": "Iteration means using evidence from one stage to improve another. If exploration shows that an important category is missing, the team may acquire additional data. If evaluation reveals systematic errors, the model or data may be revised. The cycle therefore represents learning about the problem as well as building a technical system."
        },
        {
          "type": "keypoint",
          "title": "Key Point 9",
          "items": [
            "Iteration means using evidence from one stage to improve another.",
            "Connect this idea to the relevant stage, domain or evaluation question when applying it."
          ]
        }
      ]
    }
  ]
};
