// Class 10 Artificial Intelligence — ultra-detailed continuous chapter
const ChapterData = {
  "id": "10-artificialintelligence-evaluation",
  "title": "Evaluation",
  "file": "evaluation.js",
  "description": "A continuous, detailed chapter on confusion matrix, accuracy, precision, recall, F1 score, unseen data, error analysis and responsible evaluation.",
  "summary": "Evaluation measures model performance, explains errors and guides iterative improvement of an AI solution.",
  "sections": [
    {
      "title": "Evaluating AI Models",
      "blocks": [
        {
          "type": "paragraph",
          "title": "5.1 Why AI Models Must Be Evaluated",
          "text": "A model produces predictions, classifications or other outputs, but producing an output does not prove that the model is useful. Evaluation measures how well the model performs on suitable data and helps identify the kinds of errors it makes. A model can appear accurate while still failing important cases, so evaluation must match the task and the consequences of mistakes."
        },
        {
          "type": "paragraph",
          "title": "5.2 Model Evaluation and the AI Project Cycle",
          "text": "Evaluation is the final named stage of the AI Project Cycle, but evaluation also influences earlier decisions. If a model performs poorly, the team may revisit the problem scope, data quality, features, representation or modelling approach. Evaluation therefore provides evidence for improvement rather than serving only as a final score."
        },
        {
          "type": "exam",
          "title": "Exam Focus",
          "question": "What is model evaluation?",
          "answer": "Model evaluation is the process of measuring a model’s performance on appropriate data using suitable criteria so that its predictions and limitations can be understood."
        },
        {
          "type": "paragraph",
          "title": "5.3 Correct and Incorrect Predictions",
          "text": "For a classification problem, every prediction can be compared with the actual class. Some predictions are correct and some are incorrect. To organise these outcomes, a confusion matrix records combinations of actual and predicted classes. This matrix provides the foundation for calculating common evaluation measures."
        },
        {
          "type": "paragraph",
          "title": "5.4 Binary Classification Terms",
          "text": "In binary classification, the model predicts one of two classes. A True Positive occurs when the positive class is correctly predicted. A True Negative occurs when the negative class is correctly predicted. A False Positive occurs when the model predicts positive when the actual class is negative. A False Negative occurs when the model predicts negative when the actual class is positive."
        },
        {
          "type": "data",
          "title": "5.5 Confusion Matrix",
          "headers": [
            "Actual / Predicted",
            "Positive",
            "Negative"
          ],
          "rows": [
            [
              "Positive",
              "True Positive (TP)",
              "False Negative (FN)"
            ],
            [
              "Negative",
              "False Positive (FP)",
              "True Negative (TN)"
            ]
          ],
          "text": "The four counts form the basis of accuracy, precision, recall and F1 score."
        },
        {
          "type": "comic",
          "title": "Comic: Four kinds of outcomes",
          "dialogues": [
            {
              "character": "Surya",
              "dialogue": "The model said “positive” and the actual class was positive. That is a True Positive."
            },
            {
              "character": "Divya",
              "dialogue": "If it says positive but the actual class is negative, that is a False Positive."
            },
            {
              "character": "Verma Sir",
              "dialogue": "And if the actual class is positive but the model misses it, we call that a False Negative."
            },
            {
              "character": "Surya",
              "dialogue": "The confusion matrix keeps all four cases visible."
            }
          ]
        },
        {
          "type": "paragraph",
          "title": "5.6 Accuracy",
          "text": "Accuracy measures the proportion of all predictions that are correct. It is calculated as the number of correct predictions divided by the total number of predictions. For binary classification, the formula is Accuracy = (TP + TN) / (TP + TN + FP + FN). Accuracy is easy to understand, but it may be misleading when classes are highly imbalanced."
        },
        {
          "type": "paragraph",
          "title": "5.7 Accuracy Worked Example",
          "text": "Suppose a model makes 100 predictions. It produces 45 true positives, 35 true negatives, 10 false positives and 10 false negatives. The number of correct predictions is 45 + 35 = 80. Therefore accuracy is 80/100 = 0.80, or 80 percent. The example also shows why the confusion matrix is needed: accuracy alone does not tell us whether the errors were false positives or false negatives."
        },
        {
          "type": "exam",
          "title": "Calculation",
          "question": "A classifier has TP=45, TN=35, FP=10 and FN=10. Calculate accuracy.",
          "answer": "Accuracy = (TP + TN) / (TP + TN + FP + FN) = (45 + 35) / 100 = 0.80 = 80%."
        },
        {
          "type": "paragraph",
          "title": "5.8 Precision",
          "text": "Precision answers the question: Of all cases predicted as positive, how many were actually positive? The formula is Precision = TP / (TP + FP). Precision becomes important when false positives are costly or undesirable. A system with high precision makes relatively few false-positive predictions among the cases it labels positive."
        },
        {
          "type": "paragraph",
          "title": "5.9 Recall",
          "text": "Recall answers the question: Of all actual positive cases, how many did the model correctly identify? The formula is Recall = TP / (TP + FN). Recall is important when missing a positive case is costly. A system with high recall captures a large proportion of actual positives."
        },
        {
          "type": "paragraph",
          "title": "5.10 Precision and Recall Are Different",
          "text": "Precision and recall focus on different error types. Increasing the threshold for a positive prediction may reduce false positives and improve precision but can also increase false negatives and reduce recall. The appropriate balance depends on the application. There is no universally best value independent of context."
        },
        {
          "type": "data",
          "title": "5.11 Precision and Recall Comparison",
          "headers": [
            "Measure",
            "Question answered",
            "Main error concern"
          ],
          "rows": [
            [
              "Precision",
              "Among predicted positives, how many are correct?",
              "False positives"
            ],
            [
              "Recall",
              "Among actual positives, how many were found?",
              "False negatives"
            ]
          ],
          "text": ""
        },
        {
          "type": "exam",
          "title": "Long Answer",
          "question": "Differentiate precision and recall.",
          "answer": "Precision is the proportion of predicted positive cases that are actually positive: TP/(TP+FP). Recall is the proportion of actual positive cases correctly identified: TP/(TP+FN). Precision focuses on false positives, while recall focuses on false negatives."
        },
        {
          "type": "practice",
          "title": "Calculate",
          "question": "If TP=30 and FP=10, calculate precision.",
          "answer": "Precision = TP/(TP+FP) = 30/(30+10) = 30/40 = 0.75 = 75%."
        },
        {
          "type": "practice",
          "title": "Calculate Again",
          "question": "If TP=30 and FN=5, calculate recall.",
          "answer": "Recall = TP/(TP+FN) = 30/(30+5) = 30/35 ≈ 0.8571, or about 85.71%."
        },
        {
          "type": "paragraph",
          "title": "5.12 F1 Score",
          "text": "F1 score combines precision and recall using their harmonic mean. It is useful when both precision and recall matter and a single balanced measure is desired. The formula is F1 = 2 × Precision × Recall / (Precision + Recall). Because it is a harmonic mean, a very low precision or recall can pull the F1 score down substantially."
        },
        {
          "type": "paragraph",
          "title": "5.13 F1 Worked Example",
          "text": "Suppose precision is 0.75 and recall is approximately 0.8571. F1 = 2 × 0.75 × 0.8571 / (0.75 + 0.8571), which is approximately 0.80. The value gives a combined view of the two measures rather than replacing the need to inspect them separately."
        },
        {
          "type": "exam",
          "title": "Calculation",
          "question": "If precision is 0.8 and recall is 0.6, calculate the F1 score.",
          "answer": "F1 = 2 × 0.8 × 0.6 / (0.8 + 0.6) = 0.96/1.4 ≈ 0.686, or about 68.6%."
        },
        {
          "type": "paragraph",
          "title": "5.14 When Accuracy Can Mislead",
          "text": "Consider a dataset containing 990 negative cases and 10 positive cases. A model that predicts every case as negative will be correct 990 times, giving 99% accuracy, but it will identify none of the positive cases. In such a situation, accuracy hides a serious failure. Precision, recall and the confusion matrix reveal more about the type of performance."
        },
        {
          "type": "data",
          "title": "5.15 Metric Selection",
          "headers": [
            "Situation",
            "Useful focus"
          ],
          "rows": [
            [
              "False positives are costly",
              "Precision"
            ],
            [
              "False negatives are costly",
              "Recall"
            ],
            [
              "Both precision and recall matter",
              "F1 score"
            ],
            [
              "Balanced classes and general correctness is the main concern",
              "Accuracy can be informative"
            ]
          ],
          "text": ""
        },
        {
          "type": "comic",
          "title": "Comic: Choosing the metric",
          "dialogues": [
            {
              "character": "Prince",
              "dialogue": "Our model has 98% accuracy, so is it automatically excellent?"
            },
            {
              "character": "Surya",
              "dialogue": "Not necessarily. What happens to the rare positive cases?"
            },
            {
              "character": "Sharma Sir",
              "dialogue": "Exactly. Check the confusion matrix and measures such as precision and recall."
            },
            {
              "character": "Prince",
              "dialogue": "So the metric must match the problem."
            }
          ]
        },
        {
          "type": "paragraph",
          "title": "5.16 Train, Test and Unseen Data",
          "text": "A model should not be judged only on the examples used to build it. A proper evaluation process uses data that provides evidence about how the model performs on cases it did not simply memorise. Training data is used to develop the model, while test or evaluation data provides an independent basis for measuring performance. The exact data-splitting method depends on the project."
        },
        {
          "type": "paragraph",
          "title": "5.17 Overfitting and Generalisation",
          "text": "Overfitting occurs when a model fits the training examples too closely and performs poorly on new data. A useful model should generalise: it should learn patterns that apply beyond the specific training examples. Evaluation on suitable unseen data helps reveal whether a model has learned a transferable pattern or merely memorised the training set."
        },
        {
          "type": "paragraph",
          "title": "5.18 Error Analysis",
          "text": "A score alone does not explain why a model fails. Error analysis examines incorrect predictions and looks for patterns. Errors may cluster around certain classes, input conditions, languages, image qualities or user groups. This information can guide improvements in data collection, preprocessing, feature selection, model design or problem scope."
        },
        {
          "type": "exam",
          "title": "Long Answer",
          "question": "Why should an AI model be tested on data that was not used only for training?",
          "answer": "Testing on suitable unseen data provides evidence of generalisation. If a model is evaluated only on training examples, it may appear successful because it has learned or memorised those examples without performing well on new cases."
        },
        {
          "type": "paragraph",
          "title": "5.19 Evaluation Is Context Dependent",
          "text": "There is no single metric that is always the best. In a system where false alarms are costly, precision may receive more attention. In a screening context where missing a true case is more serious, recall may be prioritised. In many applications, several measures should be reported together. Evaluation must also consider fairness, reliability, safety, usability and the real-world consequences of errors."
        },
        {
          "type": "paragraph",
          "title": "5.20 Evaluation and Responsible AI",
          "text": "Responsible evaluation asks more than “What is the score?” It asks whether performance differs across relevant groups, whether the data represents the intended users, whether important errors are concentrated in particular cases and whether the system is safe to deploy. Technical metrics are essential, but they are part of a broader assessment of whether the AI solution is appropriate."
        },
        {
          "type": "data",
          "title": "5.21 Complete Evaluation Checklist",
          "headers": [
            "Area",
            "Question"
          ],
          "rows": [
            [
              "Correctness",
              "How often are predictions correct?"
            ],
            [
              "Error types",
              "Are false positives or false negatives common?"
            ],
            [
              "Generalisation",
              "Does performance hold on suitable unseen data?"
            ],
            [
              "Coverage",
              "Does the evaluation include important cases and groups?"
            ],
            [
              "Reliability",
              "Does performance remain stable under expected conditions?"
            ],
            [
              "Impact",
              "What happens when the model is wrong?"
            ]
          ],
          "text": ""
        },
        {
          "type": "paragraph",
          "title": "5.22 Evaluation Can Send the Project Backward",
          "text": "Suppose a sentiment model has low recall for short informal messages. Evaluation has identified a problem, not simply produced a disappointing number. The team may collect better examples, revise preprocessing, improve labels or choose a different modelling method. After the change, the revised system must be evaluated again. This closes the iterative loop of the AI Project Cycle."
        },
        {
          "type": "exam",
          "title": "Final Revision",
          "question": "State the formulas for accuracy, precision, recall and F1 score.",
          "answer": "Accuracy = (TP + TN)/(TP + TN + FP + FN). Precision = TP/(TP + FP). Recall = TP/(TP + FN). F1 = 2 × Precision × Recall/(Precision + Recall)."
        },
        {
          "type": "practice",
          "title": "Integrated Question",
          "question": "A classifier has TP=40, TN=50, FP=5 and FN=5. Calculate accuracy, precision, recall and F1 score.",
          "answer": "Accuracy = 90/100 = 90%. Precision = 40/45 ≈ 88.89%. Recall = 40/45 ≈ 88.89%. Since precision and recall are equal, F1 is also approximately 88.89%."
        },
        {
          "type": "paragraph",
          "title": "5.23 Chapter Conclusion",
          "text": "Model evaluation turns an AI prediction system into an evidence-based project. The confusion matrix organises classification outcomes, while accuracy, precision, recall and F1 score provide complementary measures. Strong evaluation uses suitable unseen data, examines errors and considers the real consequences of mistakes. When evaluation reveals a weakness, the project team should use that evidence to improve the earlier stages and test again."
        },
        {
          "type": "exam",
          "title": "Master Question",
          "question": "Why is evaluation essential in the AI Project Cycle?",
          "answer": "Evaluation determines how well the model performs, identifies the types and frequency of errors, tests whether the solution generalises to suitable new data and provides evidence for improving the project. It helps decide whether the AI solution is appropriate for its intended purpose."
        }
      ]
    },
    {
      "title": "Extended Board-Style Revision and Application",
      "blocks": [
        {
          "type": "exam",
          "title": "Board Revision 1",
          "question": "Define confusion matrix.",
          "answer": "A confusion matrix records actual and predicted classes and their four outcome types."
        },
        {
          "type": "paragraph",
          "title": "Application Note 1",
          "text": "In an examination or project, connect the definition to the purpose, describe the process in the correct order, and use a concrete example to show that the concept has been understood. The exact application should remain consistent with the problem being discussed."
        },
        {
          "type": "exam",
          "title": "Board Revision 2",
          "question": "What is a false positive?",
          "answer": "A false positive is a negative case incorrectly predicted as positive."
        },
        {
          "type": "paragraph",
          "title": "Application Note 2",
          "text": "In an examination or project, connect the definition to the purpose, describe the process in the correct order, and use a concrete example to show that the concept has been understood. The exact application should remain consistent with the problem being discussed."
        },
        {
          "type": "exam",
          "title": "Board Revision 3",
          "question": "Write the accuracy formula.",
          "answer": "Accuracy = (TP+TN)/(TP+TN+FP+FN)."
        },
        {
          "type": "paragraph",
          "title": "Application Note 3",
          "text": "In an examination or project, connect the definition to the purpose, describe the process in the correct order, and use a concrete example to show that the concept has been understood. The exact application should remain consistent with the problem being discussed."
        },
        {
          "type": "exam",
          "title": "Board Revision 4",
          "question": "Differentiate precision and recall.",
          "answer": "Precision focuses on predicted positives; recall focuses on actual positives."
        },
        {
          "type": "paragraph",
          "title": "Application Note 4",
          "text": "In an examination or project, connect the definition to the purpose, describe the process in the correct order, and use a concrete example to show that the concept has been understood. The exact application should remain consistent with the problem being discussed."
        },
        {
          "type": "exam",
          "title": "Board Revision 5",
          "question": "Why can accuracy mislead?",
          "answer": "Accuracy can hide poor performance on a minority class."
        },
        {
          "type": "paragraph",
          "title": "Application Note 5",
          "text": "In an examination or project, connect the definition to the purpose, describe the process in the correct order, and use a concrete example to show that the concept has been understood. The exact application should remain consistent with the problem being discussed."
        },
        {
          "type": "exam",
          "title": "Board Revision 6",
          "question": "What is F1 score?",
          "answer": "F1 is the harmonic mean of precision and recall."
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
          "title": "5.24 Positive and Negative Classes Depend on the Task",
          "text": "The labels “positive” and “negative” are names for two classes, not statements about whether an outcome is morally good or bad. In spam detection, positive might mean spam. In a disease-screening example, positive might mean the condition is detected. Always define the positive class before calculating or interpreting metrics."
        },
        {
          "type": "keypoint",
          "title": "Key Point 1",
          "items": [
            "The labels “positive” and “negative” are names for two classes, not statements about whether an outcome is morally good or bad.",
            "Connect this idea to the relevant stage, domain or evaluation question when applying it."
          ]
        },
        {
          "type": "paragraph",
          "title": "5.25 Thresholds and Trade-offs",
          "text": "Many classifiers produce a score and then apply a threshold to decide a class. Changing the threshold can change the number of false positives and false negatives. This creates a trade-off between precision and recall. The threshold should therefore be selected with the consequences of errors in mind."
        },
        {
          "type": "keypoint",
          "title": "Key Point 2",
          "items": [
            "Many classifiers produce a score and then apply a threshold to decide a class.",
            "Connect this idea to the relevant stage, domain or evaluation question when applying it."
          ]
        },
        {
          "type": "paragraph",
          "title": "5.26 A Confusion Matrix as a Diagnostic Tool",
          "text": "The confusion matrix is more informative than a single percentage because it shows the direction of errors. If false negatives are much larger than false positives, the project team knows that the model is missing many actual positive cases. If false positives dominate, the system may be raising too many incorrect alarms."
        },
        {
          "type": "keypoint",
          "title": "Key Point 3",
          "items": [
            "The confusion matrix is more informative than a single percentage because it shows the direction of errors.",
            "Connect this idea to the relevant stage, domain or evaluation question when applying it."
          ]
        },
        {
          "type": "paragraph",
          "title": "5.27 Metric Example With Interpretation",
          "text": "Suppose a model has precision of 90% but recall of 60%. The model is usually correct when it predicts positive, but it is missing a substantial share of actual positives. Saying only “the model is 90% accurate” would not communicate this distinction. Interpretation must connect the numbers to the task."
        },
        {
          "type": "keypoint",
          "title": "Key Point 4",
          "items": [
            "Suppose a model has precision of 90% but recall of 60%.",
            "Connect this idea to the relevant stage, domain or evaluation question when applying it."
          ]
        },
        {
          "type": "paragraph",
          "title": "5.28 Fairness in Evaluation",
          "text": "A model can have a strong overall score while performing differently across groups. Where group information is relevant and ethically appropriate, evaluation should examine whether important performance differences exist. Such analysis can reveal problems hidden by an overall average."
        },
        {
          "type": "keypoint",
          "title": "Key Point 5",
          "items": [
            "A model can have a strong overall score while performing differently across groups.",
            "Connect this idea to the relevant stage, domain or evaluation question when applying it."
          ]
        },
        {
          "type": "paragraph",
          "title": "5.29 Reliability Beyond a Single Test",
          "text": "A single test set may not capture every condition under which a system will operate. Repeated testing, validation on representative data and monitoring after deployment can provide stronger evidence. The exact procedure depends on the project, but the principle is that evaluation should reflect expected real-world use."
        },
        {
          "type": "keypoint",
          "title": "Key Point 6",
          "items": [
            "A single test set may not capture every condition under which a system will operate.",
            "Connect this idea to the relevant stage, domain or evaluation question when applying it."
          ]
        },
        {
          "type": "paragraph",
          "title": "5.30 Evaluation Report Structure",
          "text": "A clear evaluation report can state the task, dataset used for evaluation, confusion matrix, metric values, important errors, limitations and proposed improvements. This makes the result auditable and helps other people understand what the score does and does not mean."
        },
        {
          "type": "keypoint",
          "title": "Key Point 7",
          "items": [
            "A clear evaluation report can state the task, dataset used for evaluation, confusion matrix, metric values, important errors, limitations and proposed improvements.",
            "Connect this idea to the relevant stage, domain or evaluation question when applying it."
          ]
        },
        {
          "type": "paragraph",
          "title": "5.31 When a Model Should Not Be Deployed",
          "text": "If evaluation shows unacceptable error rates, severe data limitations, unsafe behaviour or serious unexplained differences in performance, the correct action may be to improve the system or not deploy it. A project is not successful merely because a model can be trained."
        },
        {
          "type": "keypoint",
          "title": "Key Point 8",
          "items": [
            "If evaluation shows unacceptable error rates, severe data limitations, unsafe behaviour or serious unexplained differences in performance, the correct action may be to improve the system or not deploy it.",
            "Connect this idea to the relevant stage, domain or evaluation question when applying it."
          ]
        },
        {
          "type": "paragraph",
          "title": "5.32 Final Link to the Project Cycle",
          "text": "Evaluation completes one pass through the AI Project Cycle, but the evidence it produces can start the next pass. A project may acquire better data, revise labels, change the model, adjust the goal or reconsider whether AI is appropriate. This is how evaluation becomes a practical tool for improvement rather than a final number."
        },
        {
          "type": "keypoint",
          "title": "Key Point 9",
          "items": [
            "Evaluation completes one pass through the AI Project Cycle, but the evidence it produces can start the next pass.",
            "Connect this idea to the relevant stage, domain or evaluation question when applying it."
          ]
        }
      ]
    }
  ]
};
