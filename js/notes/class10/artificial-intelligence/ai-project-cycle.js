// Class 10 Artificial Intelligence — expanded information-only chapter
const ChapterData = {
  "id": "10-artificialintelligence-ai-project-cycle",
  "title": "AI Project Cycle",
  "file": "ai-project-cycle.js",
  "description": "A continuous, detailed chapter on problem scoping, data acquisition, data exploration, modelling and evaluation. Expanded substantially with additional topic-by-topic explanatory content only; question, practice and unrelated revision blocks are not included.",
  "summary": "The AI Project Cycle provides a structured and iterative route from a real-world problem to a tested AI solution. The expanded version develops the concepts, processes, representations, applications, limitations and responsible-use considerations in continuous detail.",
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
    },
    {
      "title": "Expanded Topic-by-Topic Chapter Content",
      "blocks": [
        {
          "type": "paragraph",
          "title": "2.1 Why an AI Project Needs a Cycle",
          "text": "An AI project is not simply the act of training a model. It begins with a problem, identifies what information is required, obtains and understands data, develops an approach, evaluates the result and improves the solution. These activities form a cycle because evaluation can reveal that the original problem statement, data or model needs revision."
        },
        {
          "type": "paragraph",
          "title": "2.2 From Real-World Need to AI Problem",
          "text": "A real-world problem may be broad, while an AI system requires a precise computational task. For example, “improve road safety” is too broad to train a model directly. It can be narrowed into a task such as identifying whether a driver is using a phone from a suitable image dataset, provided the data, privacy conditions and intended use are appropriate."
        },
        {
          "type": "paragraph",
          "title": "2.3 Problem Scoping",
          "text": "Problem scoping defines what the AI project will address and what it will not address. It clarifies the stakeholders, desired outcome, available resources, constraints and measurable goal. Good scoping prevents a project from becoming too broad and helps determine what data and modelling approach will later be required."
        },
        {
          "type": "paragraph",
          "title": "2.4 Stakeholders",
          "text": "Stakeholders are people or groups who affect, use, provide information for, or are affected by the AI system. They may include users, subject experts, organisations, data providers, developers and people affected by decisions. Identifying stakeholders early can reveal requirements that may not be visible from the technical viewpoint alone."
        },
        {
          "type": "paragraph",
          "title": "2.5 Goal and Success Criteria",
          "text": "An AI project needs a clear statement of what success means. A prediction system may aim to reduce error, a classifier may aim to distinguish categories accurately, and a recommendation system may aim to improve useful engagement. The success criterion should be measurable and connected to the real-world objective rather than chosen only because it is easy to calculate."
        },
        {
          "type": "paragraph",
          "title": "2.6 Four Ws and One H",
          "text": "A practical way to scope a problem is to ask Who is affected, What is the problem, Where does it occur, Why does it matter and How might an AI-based approach help. These questions turn a general concern into a structured problem statement. They also help identify missing information and assumptions before data collection begins."
        },
        {
          "type": "paragraph",
          "title": "2.7 Sustainable Development Goals and AI",
          "text": "The Sustainable Development Goals provide a broad framework for connecting projects with social, economic and environmental challenges. AI can support goals such as health, education, sustainable agriculture, efficient resource use and disaster response. Linking an AI project with a broader development goal can clarify why the problem matters, but the connection should remain specific rather than being used only as a label."
        },
        {
          "type": "paragraph",
          "title": "2.8 Data Acquisition",
          "text": "Data acquisition is the process of obtaining the information needed for an AI project. Sources can include sensors, surveys, observations, existing databases, documents, images, audio recordings and public datasets. The source must be appropriate to the problem and the collection process should respect privacy, permissions, quality requirements and relevant rules."
        },
        {
          "type": "paragraph",
          "title": "2.9 Primary and Secondary Data",
          "text": "Primary data is collected specifically for the current investigation, such as measurements recorded by a project team. Secondary data already exists and is reused, such as an existing dataset or published record. The choice depends on availability, relevance, quality, cost, permissions and the amount of control the project requires over collection."
        },
        {
          "type": "paragraph",
          "title": "2.10 Data Quality",
          "text": "Useful data should be relevant, sufficiently complete, accurate for its purpose, consistent and representative of the cases the model will encounter. Missing values, duplicated records, incorrect labels and measurement errors can affect a model before any algorithm is applied. Data quality checks are therefore part of the technical work of an AI project."
        },
        {
          "type": "paragraph",
          "title": "2.11 Data Labelling",
          "text": "Labelling assigns meaningful target information to examples when a supervised learning task requires known outputs. For an image classifier, a label might identify the object category. Labels must be defined consistently; if different people apply different meanings to the same label, the model receives contradictory training information."
        },
        {
          "type": "paragraph",
          "title": "2.12 Data Privacy During Acquisition",
          "text": "Collecting data for an AI project creates responsibilities around personal information. A project should collect only information that is necessary for the stated purpose, protect it from unauthorised access and avoid exposing identities when they are not needed. Privacy considerations should be included at the planning stage rather than treated as an afterthought."
        },
        {
          "type": "paragraph",
          "title": "2.13 Data Exploration",
          "text": "Data exploration is the process of understanding what the collected data contains before building a model. It includes examining categories, ranges, distributions, missing values, unusual observations and relationships between variables. Exploration can reveal whether the data actually represents the problem that was scoped."
        },
        {
          "type": "paragraph",
          "title": "2.14 Numerical and Categorical Data",
          "text": "Numerical data represents quantities that can be measured or counted, while categorical data represents groups or labels. For example, age and temperature are numerical, whereas vehicle type and crop category are categorical. Different data types require different ways of summarising, visualising and preparing information for modelling."
        },
        {
          "type": "paragraph",
          "title": "2.15 Data Visualisation",
          "text": "Visualisation converts data into graphical forms that make patterns easier to inspect. Bar charts are useful for comparing categories, line charts for changes across an ordered sequence, histograms for distributions and scatter plots for relationships between numerical variables. The choice of visualisation should match the question being investigated."
        },
        {
          "type": "paragraph",
          "title": "2.16 Outliers and Anomalies",
          "text": "An outlier is an observation that is unusually far from the rest of the data under the chosen context. It may represent a genuine rare event, a measurement error, a data-entry mistake or an unusual but important case. It should not be removed automatically; its cause and relevance must be examined."
        },
        {
          "type": "paragraph",
          "title": "2.17 Features and Targets",
          "text": "A feature is an input variable used by a model, while a target is the output the model is expected to predict in supervised learning. For a house-price model, area, location and number of rooms may be features, while the known sale price is the target. Clear separation helps define the learning task correctly."
        },
        {
          "type": "paragraph",
          "title": "2.18 Modelling",
          "text": "Modelling is the stage in which a computational method is selected and trained or configured to produce the required output. The approach depends on the type of problem, the data available, the desired output and the constraints of the application. A model is not selected merely because it is complex; it should be suitable for the task."
        },
        {
          "type": "paragraph",
          "title": "2.19 Rule-Based and Learning-Based Approaches",
          "text": "A rule-based approach represents knowledge through explicit conditions and actions. A learning-based approach derives patterns from examples. Rule-based systems can be useful when the rules are stable and clearly known. Learning-based systems are useful when the relationship is complex or difficult to write manually but can be learned from representative data."
        },
        {
          "type": "paragraph",
          "title": "2.20 Classification and Regression",
          "text": "Classification predicts a category, such as “safe” or “unsafe” or one of several object classes. Regression predicts a numerical value, such as temperature, demand or estimated price. The distinction comes from the nature of the target rather than from the specific algorithm used."
        },
        {
          "type": "paragraph",
          "title": "2.21 Supervised Learning in the Project Cycle",
          "text": "In supervised learning, the acquired dataset includes examples with known target outputs. The model learns from these input-output relationships and is later evaluated on data it did not use for training. Careful dataset division is important because testing a model on the same examples it memorised can give an unrealistically high impression of performance."
        },
        {
          "type": "paragraph",
          "title": "2.22 Unsupervised Learning in the Project Cycle",
          "text": "Unsupervised learning can be used when the project seeks structure rather than a predefined target. Clustering may reveal groups of similar records, while other methods can discover patterns in high-dimensional data. The discovered groups still need interpretation to determine whether they are meaningful for the real-world problem."
        },
        {
          "type": "paragraph",
          "title": "2.23 Neural Networks in the Project Cycle",
          "text": "Neural networks learn numerical weights connecting computational units. During training, the model compares its output with the expected result when labels are available and adjusts its parameters to reduce error. Neural networks can represent complex relationships, but they also require appropriate data, computational resources and careful evaluation."
        },
        {
          "type": "paragraph",
          "title": "2.24 Training a Model",
          "text": "Training is the process of using prepared data to adjust a model so that it performs the desired task. The training process may involve repeated passes through examples and an optimisation method that changes model parameters. Training performance alone does not establish that the model will work reliably on new cases."
        },
        {
          "type": "paragraph",
          "title": "2.25 Model Evaluation",
          "text": "Evaluation compares model outputs with appropriate evidence of the desired behaviour. For classification, a confusion matrix and measures such as accuracy, precision and recall may be useful. For numerical prediction, error measures can describe the difference between predicted and actual values. The metric should reflect what matters in the real application."
        },
        {
          "type": "paragraph",
          "title": "2.26 Iteration in the AI Project Cycle",
          "text": "If evaluation shows weak performance, the next step is not always to choose a more complicated model. The problem may be poorly scoped, the data may be unrepresentative, labels may be inconsistent, important features may be missing or the evaluation metric may not match the real goal. Iteration means returning to the relevant earlier stage and improving the project systematically."
        },
        {
          "type": "paragraph",
          "title": "2.27 Deployment and Real-World Use",
          "text": "After a model performs acceptably under evaluation conditions, it may be integrated into an application or workflow. Deployment introduces new conditions such as changing data, different users, system delays, security requirements and operational costs. A model that worked in a controlled dataset may require monitoring after deployment."
        },
        {
          "type": "paragraph",
          "title": "2.28 Data Drift",
          "text": "Data drift occurs when the characteristics of incoming data change over time. For example, a model trained on one pattern of consumer behaviour may encounter different behaviour later. Drift can reduce performance even when the software has not changed, so important AI systems may need ongoing monitoring and periodic updating."
        },
        {
          "type": "paragraph",
          "title": "2.29 Documentation",
          "text": "Documentation records the purpose of the project, data sources, preparation steps, modelling choices, evaluation results, limitations and intended use. Good documentation improves reproducibility and makes it easier for another person to understand what the system does and does not guarantee."
        },
        {
          "type": "paragraph",
          "title": "2.30 End-to-End Flow of an AI Project",
          "text": "A complete AI project moves from defining a meaningful problem to acquiring suitable data, exploring and preparing that data, selecting an appropriate modelling approach, training the model, evaluating it against relevant criteria and improving the solution through iteration. The stages are connected: a change in the problem definition can change the data requirement, which can change the model and the evaluation method."
        },
        {
          "type": "paragraph",
          "title": "2.31 Data Preparation",
          "text": "Before modelling, data may need to be cleaned, formatted, transformed or organised. Preparation can include handling missing values, removing exact duplicates, standardising units, encoding categories and selecting useful fields. Every transformation should be documented because it can affect the meaning of the final model."
        },
        {
          "type": "paragraph",
          "title": "2.32 Missing Data",
          "text": "Missing values can occur because information was not recorded, a sensor failed or a field was not applicable. Different situations require different treatment. A missing value should not automatically be replaced with zero because zero may have a completely different meaning from “unknown”."
        },
        {
          "type": "paragraph",
          "title": "2.33 Duplicate Records",
          "text": "Duplicate records can distort patterns by giving some observations more influence than intended. However, two similar records are not necessarily duplicates; they may represent two genuine events. Deduplication therefore requires an appropriate definition of what makes two records the same observation."
        },
        {
          "type": "paragraph",
          "title": "2.34 Feature Selection",
          "text": "Feature selection involves choosing variables that are relevant to the prediction or analysis task. Unnecessary features can add noise, increase computation or create misleading relationships. Useful features should also be available at the time the model is expected to make its prediction."
        },
        {
          "type": "paragraph",
          "title": "2.35 Data Leakage",
          "text": "Data leakage occurs when information that would not legitimately be available at prediction time enters the training process. Leakage can make evaluation appear excellent while the deployed system performs poorly. Preventing leakage requires careful separation of training information from future or target-derived information."
        },
        {
          "type": "paragraph",
          "title": "2.36 Dataset Splitting",
          "text": "A dataset is often divided into training, validation and test portions. The training portion supports learning, validation supports development choices and the test portion provides a final independent estimate. The exact proportions depend on the dataset and task, and time-ordered problems may require chronological rather than random splitting."
        },
        {
          "type": "paragraph",
          "title": "2.37 Baseline Models",
          "text": "A baseline is a simple reference method used to judge whether a more complex approach actually improves performance. A baseline might predict the most common class or use a simple numerical rule. Without a baseline, a complex model can appear impressive even when a simple method performs almost as well."
        },
        {
          "type": "paragraph",
          "title": "2.38 Model Selection",
          "text": "Model selection should consider task type, dataset size, interpretability, computational resources, expected errors and deployment requirements. The most sophisticated model is not automatically the best choice. A simpler model may be preferable when it provides sufficient performance and is easier to understand or maintain."
        },
        {
          "type": "paragraph",
          "title": "2.39 Hyperparameters",
          "text": "Hyperparameters are settings chosen before or around the training process rather than learned as ordinary model parameters from individual examples. Examples can include learning rate, tree depth or the number of neighbours, depending on the algorithm. They should be selected using appropriate validation procedures rather than repeatedly optimising against the final test set."
        },
        {
          "type": "paragraph",
          "title": "2.40 Generalisation During the Cycle",
          "text": "The purpose of the project cycle is not merely to create a model that fits available data. The model should generalise to new cases drawn from the intended operating conditions. Data collection, splitting, modelling and evaluation must therefore work together to estimate real-world performance."
        },
        {
          "type": "paragraph",
          "title": "2.41 Error Analysis",
          "text": "After evaluating a model, examining incorrect predictions can reveal patterns that a single metric cannot show. Errors may cluster around certain classes, locations, lighting conditions, languages or data sources. Error analysis can therefore guide targeted improvements to data, labels, features or modelling choices."
        },
        {
          "type": "paragraph",
          "title": "2.42 Ethical Scoping",
          "text": "Ethical considerations belong inside problem scoping. A project should ask whether the proposed AI use is appropriate, who may be harmed by errors, whether sensitive information is involved and whether affected people can understand or challenge important decisions. A technically possible project is not automatically an appropriate project."
        },
        {
          "type": "paragraph",
          "title": "2.43 Feasibility",
          "text": "An AI project should be feasible with respect to data, expertise, computation, time, budget and deployment conditions. If the necessary data cannot be obtained responsibly, changing the algorithm cannot solve the fundamental problem. Feasibility analysis can prevent resources from being spent on an impossible or inappropriate project."
        },
        {
          "type": "paragraph",
          "title": "2.44 Deployment Constraints",
          "text": "A deployed model may have limits on memory, processing time, network access, energy use or response latency. A highly accurate model that is too slow or expensive for the intended environment may not be practical. The project cycle should therefore consider operational constraints before final selection."
        },
        {
          "type": "paragraph",
          "title": "2.45 Continuous Improvement",
          "text": "An AI project can be improved by revisiting the problem definition, collecting better examples, correcting labels, changing representations, tuning models or improving evaluation. Continuous improvement should be evidence-driven: each change should address an identified limitation rather than simply adding complexity."
        }
      ]
    }
  ]
};
