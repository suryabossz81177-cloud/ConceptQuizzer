// Class 10 Artificial Intelligence — expanded information-only chapter
const ChapterData = {
  "id": "10-artificialintelligence-evaluation",
  "title": "Evaluation",
  "file": "evaluation.js",
  "description": "A continuous, detailed chapter on confusion matrix, accuracy, precision, recall, F1 score, unseen data, error analysis and responsible evaluation. Expanded substantially with additional topic-by-topic explanatory content only; question, practice and unrelated revision blocks are not included.",
  "summary": "Evaluation measures model performance, explains errors and guides iterative improvement of an AI solution. The expanded version develops the concepts, processes, representations, applications, limitations and responsible-use considerations in continuous detail.",
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
          "type": "paragraph",
          "title": "5.23 Chapter Conclusion",
          "text": "Model evaluation turns an AI prediction system into an evidence-based project. The confusion matrix organises classification outcomes, while accuracy, precision, recall and F1 score provide complementary measures. Strong evaluation uses suitable unseen data, examines errors and considers the real consequences of mistakes. When evaluation reveals a weakness, the project team should use that evidence to improve the earlier stages and test again."
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
    },
    {
      "title": "Expanded Topic-by-Topic Chapter Content",
      "blocks": [
        {
          "type": "paragraph",
          "title": "5.1 Why Evaluation Is Necessary",
          "text": "Evaluation determines how well an AI system performs its intended task on suitable data. A model can produce outputs even when it is poorly designed, so simply obtaining predictions is not evidence of quality. Evaluation connects technical performance with the question of whether the system is reliable enough for its intended purpose."
        },
        {
          "type": "paragraph",
          "title": "5.2 Evaluation Data",
          "text": "Evaluation should use data that represents the situations in which the model will be used. If the evaluation data is too similar to training examples, performance can look better than it really is. If it does not represent important real-world cases, the reported metric may fail to describe actual behaviour."
        },
        {
          "type": "paragraph",
          "title": "5.3 Classification Outcomes",
          "text": "For a binary classifier, each prediction can be compared with the actual class. A true positive is a positive case correctly identified as positive, while a true negative is a negative case correctly identified as negative. A false positive is a negative case incorrectly labelled positive, and a false negative is a positive case incorrectly labelled negative."
        },
        {
          "type": "paragraph",
          "title": "5.4 Confusion Matrix",
          "text": "A confusion matrix organises classification results into true positives, false positives, true negatives and false negatives. It provides more information than a single accuracy value because it shows the types of mistakes the model makes. The matrix is especially useful when the cost of different errors is not the same."
        },
        {
          "type": "paragraph",
          "title": "5.5 Accuracy",
          "text": "Accuracy is the proportion of all evaluated cases that were classified correctly. It is calculated as (TP + TN) / (TP + TN + FP + FN). Accuracy can be informative when classes are reasonably balanced and the consequences of different error types are similar."
        },
        {
          "type": "paragraph",
          "title": "5.6 Precision",
          "text": "Precision measures how many cases predicted as positive were actually positive. It is calculated as TP / (TP + FP). High precision means that positive predictions contain relatively few false positives. Precision is important when unnecessary positive alerts or classifications are costly."
        },
        {
          "type": "paragraph",
          "title": "5.7 Recall",
          "text": "Recall measures how many of the actual positive cases were correctly identified. It is calculated as TP / (TP + FN). High recall means that relatively few positive cases were missed. Recall is important when missing a true positive is especially costly."
        },
        {
          "type": "paragraph",
          "title": "5.8 Specificity",
          "text": "Specificity measures how many actual negative cases were correctly identified. It is calculated as TN / (TN + FP). It is useful when the ability to avoid false positives matters. Specificity and recall focus on different parts of the confusion matrix and can reveal behaviour that accuracy alone hides."
        },
        {
          "type": "paragraph",
          "title": "5.9 F1 Score",
          "text": "The F1 score combines precision and recall using their harmonic mean: F1 = 2 × (precision × recall) / (precision + recall), provided the denominator is non-zero. It is useful when a balance between precision and recall is desired. A high F1 requires both measures to be reasonably strong."
        },
        {
          "type": "paragraph",
          "title": "5.10 Why Accuracy Can Mislead",
          "text": "Suppose a dataset contains 990 negative cases and 10 positive cases. A classifier that predicts every case as negative would have 99% accuracy but would detect none of the positive cases. This shows why evaluation must consider class distribution and the practical cost of errors."
        },
        {
          "type": "paragraph",
          "title": "5.11 Thresholds and Trade-offs",
          "text": "Many classification systems produce a score or probability and then apply a threshold to decide the final class. Changing the threshold can alter the balance between false positives and false negatives. Therefore, a model does not have a single precision or recall value independent of how its outputs are converted into decisions."
        },
        {
          "type": "paragraph",
          "title": "5.12 Regression Evaluation",
          "text": "For numerical prediction, classification measures are not appropriate because there are no discrete positive and negative outcomes in the same sense. Regression can be evaluated using measures such as mean absolute error, mean squared error or related quantities that compare predicted values with actual values."
        },
        {
          "type": "paragraph",
          "title": "5.13 Mean Absolute Error",
          "text": "Mean Absolute Error, or MAE, is the average of the absolute differences between predicted and actual values. MAE = (1/n) × Σ|actual − predicted|. It is expressed in the same units as the target and therefore provides an intuitive description of average prediction error."
        },
        {
          "type": "paragraph",
          "title": "5.14 Mean Squared Error",
          "text": "Mean Squared Error, or MSE, is the average of squared differences between predicted and actual values. MSE = (1/n) × Σ(actual − predicted)². Squaring makes larger errors contribute disproportionately to the result, so MSE is sensitive to large mistakes."
        },
        {
          "type": "paragraph",
          "title": "5.15 Root Mean Squared Error",
          "text": "Root Mean Squared Error, or RMSE, is the square root of MSE. Taking the square root returns the measure to the same units as the target variable. Like MSE, RMSE gives greater influence to larger errors than MAE does."
        },
        {
          "type": "paragraph",
          "title": "5.16 Error and Loss",
          "text": "An error describes the difference between a prediction and the corresponding target for a particular case. A loss function defines how such differences are converted into a quantity used during model training or optimisation. An evaluation metric may be chosen for reporting performance even when it is different from the loss used during training."
        },
        {
          "type": "paragraph",
          "title": "5.17 Training Performance vs Generalisation",
          "text": "A model can achieve very low error on its training data while performing poorly on new data. Evaluation must therefore distinguish memorisation from generalisation. Comparing training and independent validation or test performance helps identify whether the model has learned patterns that transfer beyond the examples used to fit it."
        },
        {
          "type": "paragraph",
          "title": "5.18 Overfitting",
          "text": "Overfitting occurs when a model captures details specific to training data rather than patterns that generalise. It can arise when a model is too flexible relative to the amount or quality of data, when training is excessive, or when the data contains accidental patterns. It is diagnosed through performance on data not used to fit the model."
        },
        {
          "type": "paragraph",
          "title": "5.19 Underfitting",
          "text": "Underfitting occurs when a model is too limited to capture important relationships in the data. It can result from an overly simple model, insufficient training or inadequate features. Both training and evaluation performance can be poor in an underfitted system."
        },
        {
          "type": "paragraph",
          "title": "5.20 Validation and Test Sets",
          "text": "A validation set can be used while developing a model to compare approaches or tune choices. A test set should be kept separate for a final unbiased estimate after major model decisions have been made. Repeatedly using the test set to guide development can make it function like a validation set and weaken the independence of the final estimate."
        },
        {
          "type": "paragraph",
          "title": "5.21 Cross-Validation",
          "text": "Cross-validation repeatedly divides available data into training and validation portions so that performance can be estimated across multiple splits. It can be useful when datasets are not large enough to sacrifice a large fixed validation set. The exact procedure should respect the structure of the data, especially when observations are related in time or by group."
        },
        {
          "type": "paragraph",
          "title": "5.22 Class Imbalance",
          "text": "Class imbalance occurs when one category contains many more examples than another. It can make accuracy misleading and can cause a model to focus heavily on the majority class. Evaluation should therefore include class-sensitive measures and, when appropriate, examine performance separately for important groups or classes."
        },
        {
          "type": "paragraph",
          "title": "5.23 False Positives and False Negatives",
          "text": "The importance of an error depends on the application. In spam filtering, a false positive can cause a legitimate message to be treated as spam. In a screening system, a false negative can mean that an important case is missed. Evaluation must therefore consider the consequences of each type of error."
        },
        {
          "type": "paragraph",
          "title": "5.24 Model Comparison",
          "text": "Two models should be compared using the same evaluation data, the same target definition and compatible metrics. A model with higher accuracy is not automatically better if it has unacceptable recall, precision or subgroup performance. Model selection should consider the actual objective and constraints of the application."
        },
        {
          "type": "paragraph",
          "title": "5.25 Evaluation Across Groups",
          "text": "Average performance can hide differences between groups. For example, a classifier may have high overall accuracy while making substantially more errors for a less represented category. Responsible evaluation therefore examines relevant subgroup performance when the application affects different populations."
        },
        {
          "type": "paragraph",
          "title": "5.26 Robustness",
          "text": "Robustness describes how well a model maintains useful performance when inputs vary within conditions that should reasonably be expected. Changes in lighting for images, wording for text or measurement noise for sensors can affect performance. Robustness testing helps identify weaknesses that a clean benchmark may not reveal."
        },
        {
          "type": "paragraph",
          "title": "5.27 Reliability and Uncertainty",
          "text": "A model may be uncertain even when it must produce a final output. Confidence-like scores can help communicate uncertainty, but a numerical score is not automatically a calibrated probability of correctness. Important applications should establish how uncertainty is interpreted and what action should follow when the model is unsure."
        },
        {
          "type": "paragraph",
          "title": "5.28 Evaluation After Deployment",
          "text": "Evaluation should not necessarily stop after deployment. Real-world data can change, users can behave differently and new failure cases can appear. Monitoring can track performance indicators, data changes and unusual outputs so that the system can be reviewed or updated when necessary."
        },
        {
          "type": "paragraph",
          "title": "5.29 Human Evaluation",
          "text": "Some AI outputs cannot be fully assessed by a simple numerical metric. Language generation, explanations, educational content and creative outputs may require human judgement using clearly defined criteria. Human evaluation should be systematic enough to make results meaningful rather than relying only on informal impressions."
        },
        {
          "type": "paragraph",
          "title": "5.30 Choosing the Right Metric",
          "text": "The correct evaluation metric depends on the task, data and consequences of mistakes. Classification may require accuracy, precision, recall, F1 or confusion-matrix analysis. Regression may require MAE, MSE or RMSE. A metric should be selected because it represents the real objective, not simply because it produces a convenient number."
        },
        {
          "type": "paragraph",
          "title": "5.31 Evaluation as a Decision Tool",
          "text": "Evaluation does not merely produce a score; it provides evidence for deciding whether a system should be improved, restricted, deployed or rejected. Technical metrics should be interpreted together with data quality, safety, fairness, privacy, cost and the consequences of errors."
        },
        {
          "type": "paragraph",
          "title": "5.32 A Complete Evaluation Process",
          "text": "A complete evaluation process defines the intended task, selects representative evaluation data, chooses appropriate metrics, calculates results correctly, analyses error types, checks important subgroups, examines robustness and interprets the findings against the real-world purpose. The final judgement should state both strengths and limitations rather than relying on a single number."
        },
        {
          "type": "paragraph",
          "title": "5.33 Confusion Matrix Example",
          "text": "Consider a binary classifier evaluated on 100 cases. If TP=40, TN=50, FP=5 and FN=5, then 90 cases are classified correctly. Accuracy is 90/100 = 0.90. Precision is 40/(40+5) = 0.8889, while recall is 40/(40+5) = 0.8889. The example shows how the confusion-matrix counts feed directly into different measures."
        },
        {
          "type": "paragraph",
          "title": "5.34 Precision-Recall Relationship",
          "text": "Precision and recall can move in different directions when the decision threshold changes. A stricter threshold may reduce false positives and increase precision but can also miss more positive cases and reduce recall. The preferred balance depends on the application and the relative cost of the two error types."
        },
        {
          "type": "paragraph",
          "title": "5.35 F1 as a Balance Measure",
          "text": "Because the F1 score uses the harmonic mean, a very low precision or recall strongly limits the final score. This makes F1 useful when both types of performance matter and when a single balanced measure is required. It should still be interpreted alongside the underlying precision and recall values."
        },
        {
          "type": "paragraph",
          "title": "5.36 Macro and Weighted Averages",
          "text": "When a classification task has multiple classes, performance can be averaged across classes. A macro average gives each class equal weight, while a weighted average gives greater influence to classes with more examples. The choice changes what the final summary emphasises."
        },
        {
          "type": "paragraph",
          "title": "5.37 Multiclass Evaluation",
          "text": "In multiclass classification, each class can be analysed using one-versus-rest reasoning to obtain class-specific true positives, false positives and false negatives. A confusion matrix can show which classes are commonly confused. This is often more informative than a single overall accuracy value."
        },
        {
          "type": "paragraph",
          "title": "5.38 Calibration",
          "text": "Calibration concerns whether predicted probabilities correspond reasonably to observed frequencies. If a group of predictions is assigned probability 0.8, a well-calibrated system would be correct roughly 80% of the time for cases with that predicted probability under the relevant conditions. Calibration is different from discrimination or ranking ability."
        },
        {
          "type": "paragraph",
          "title": "5.39 ROC and Threshold Analysis",
          "text": "For binary classifiers, threshold changes produce different true-positive and false-positive rates. ROC analysis represents this trade-off across thresholds. It can help compare ranking behaviour, but practical metric selection should still consider class prevalence and the real cost of errors."
        },
        {
          "type": "paragraph",
          "title": "5.40 Precision-Recall Curves",
          "text": "Precision-recall analysis is particularly informative when the positive class is rare. It shows how precision changes as recall changes across thresholds. A system that appears strong by accuracy can still have poor positive-class performance, which precision-recall analysis can make visible."
        },
        {
          "type": "paragraph",
          "title": "5.41 Error Distribution",
          "text": "The number of errors is only part of evaluation. It is also useful to inspect whether errors are concentrated in a particular class, range of values, environment or user group. An uneven error distribution may reveal a weakness that an overall metric hides."
        },
        {
          "type": "paragraph",
          "title": "5.42 Regression Residuals",
          "text": "A residual is the difference between an observed value and a predicted value. Examining residuals can reveal systematic errors, such as predictions consistently being too high for one range of values and too low for another. Such patterns suggest that the model is missing some relationship in the data."
        },
        {
          "type": "paragraph",
          "title": "5.43 MAE and MSE Comparison",
          "text": "MAE treats errors proportionally to their absolute size, while MSE gives much greater weight to large errors because the differences are squared. Therefore, a model with a few very large mistakes can receive a much worse MSE than MAE might suggest. The metric should match the importance of large errors in the application."
        },
        {
          "type": "paragraph",
          "title": "5.44 Evaluation Leakage",
          "text": "Evaluation leakage occurs when information from the evaluation set influences model development or preprocessing decisions. Even if the test examples are not directly used for training, repeatedly inspecting test performance and changing the model based on it can make the final estimate optimistic."
        },
        {
          "type": "paragraph",
          "title": "5.45 Robust Test Design",
          "text": "A strong evaluation design identifies realistic operating conditions before testing begins. It can include variations in input quality, different sources, difficult examples and important edge cases. The aim is to measure performance where the system is actually expected to work, not only on convenient examples."
        },
        {
          "type": "paragraph",
          "title": "5.46 Reproducibility of Evaluation",
          "text": "Evaluation results should be reproducible enough for another person to understand how they were obtained. This requires recording the dataset version, preprocessing steps, model version, metric definitions and relevant settings. Without such information, two reported scores may not be directly comparable."
        },
        {
          "type": "paragraph",
          "title": "5.47 Metric Limitations",
          "text": "Every metric compresses complex behaviour into a number. A high score can coexist with harmful failure cases, data bias or poor robustness. Metrics are therefore evidence rather than complete descriptions of an AI system. Interpretation requires context, error analysis and knowledge of the application."
        }
      ]
    }
  ]
};
