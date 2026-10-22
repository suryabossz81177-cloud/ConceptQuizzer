/* Class 10 Artificial Intelligence (417): NCERT/CBSE-aligned board-style practice. */
window.QuizData = window.QuizData || {};
window.QuizData["10-artificialintelligence-evaluation"] = {
  easy: [
    {
        "question": "A classifier makes 90 correct predictions out of 100 evaluated examples. Its accuracy is",
        "options": [
            "90%",
            "9%",
            "10%",
            "100%"
        ],
        "answer": 0
    },
    {
        "question": "A true positive is a case that is",
        "options": [
            "actually positive and predicted negative",
            "actually negative and predicted negative",
            "actually positive and predicted positive",
            "actually negative and predicted positive"
        ],
        "answer": 2
    },
    {
        "question": "A false positive is a case that is",
        "options": [
            "actually negative and predicted negative",
            "actually positive and predicted positive",
            "actually negative but predicted positive",
            "actually positive but predicted negative"
        ],
        "answer": 2
    },
    {
        "question": "A false negative is a case that is",
        "options": [
            "actually positive but predicted negative",
            "actually negative but predicted positive",
            "actually negative and predicted negative",
            "actually positive and predicted positive"
        ],
        "answer": 0
    },
    {
        "question": "A true negative is a case that is",
        "options": [
            "actually negative and predicted negative",
            "actually negative but predicted positive",
            "actually positive but predicted negative",
            "actually positive and predicted positive"
        ],
        "answer": 0
    },
    {
        "question": "Precision is calculated as",
        "options": [
            "TP / (TP + FN)",
            "(TP + TN) / total",
            "TP / (TP + FP)",
            "TN / (TN + FP)"
        ],
        "answer": 2
    },
    {
        "question": "Recall is calculated as",
        "options": [
            "TN / (TN + FN)",
            "FP / (TP + FP)",
            "TP / (TP + FP)",
            "TP / (TP + FN)"
        ],
        "answer": 3
    },
    {
        "question": "The F1 score is the harmonic mean of",
        "options": [
            "training time and test time",
            "accuracy and error rate",
            "precision and recall",
            "specificity and sample size"
        ],
        "answer": 2
    },
    {
        "question": "A model predicts 'not fraud' for every case when only 1% of cases are fraud. It may show high accuracy but",
        "options": [
            "have perfect recall for fraud",
            "fail to detect the minority fraud class",
            "eliminate class imbalance",
            "guarantee useful performance"
        ],
        "answer": 1
    },
    {
        "question": "For a screening task where missing a real positive case is especially costly, the metric to emphasise is often",
        "options": [
            "precision alone in every situation",
            "file size",
            "training accuracy only",
            "recall"
        ],
        "answer": 3
    }
],
  medium: [
    {
        "question": "When false alarms are expensive and predicted positives must be reliable, the metric to emphasise is often",
        "options": [
            "recall alone in every situation",
            "precision",
            "number of features",
            "training time"
        ],
        "answer": 1
    },
    {
        "question": "A model scores 99% on training data and 68% on unseen test data. The pattern suggests",
        "options": [
            "no need for further evaluation",
            "overfitting or a train-test distribution mismatch",
            "guaranteed unbiased data",
            "perfect generalisation"
        ],
        "answer": 1
    },
    {
        "question": "A model performs poorly on both training and test sets. This may indicate",
        "options": [
            "underfitting or an inadequate model/features",
            "data leakage necessarily",
            "perfect fit",
            "a perfect decision boundary"
        ],
        "answer": 0
    },
    {
        "question": "A feature contains information that would only become available after the event being predicted. Using it causes",
        "options": [
            "improved real-time validity",
            "guaranteed fairness",
            "data leakage and unrealistic evaluation",
            "underfitting by definition"
        ],
        "answer": 2
    },
    {
        "question": "A test set should remain separate from repeated model tuning so that it",
        "options": [
            "can be used to choose every hyperparameter",
            "guarantees 100% accuracy",
            "provides a less biased final estimate of generalisation",
            "becomes part of every training iteration"
        ],
        "answer": 2
    },
    {
        "question": "A validation set is commonly used to",
        "options": [
            "store the output labels only",
            "prove the model is ethical by itself",
            "replace all training data",
            "compare models or tune settings before final testing"
        ],
        "answer": 3
    },
    {
        "question": "A baseline model is valuable because it",
        "options": [
            "provides a reference point for judging improvement",
            "replaces evaluation metrics",
            "guarantees the final model is fair",
            "uses all data for training"
        ],
        "answer": 0
    },
    {
        "question": "Raising a binary classifier's positive threshold often",
        "options": [
            "increases every metric automatically",
            "converts classification into image segmentation",
            "reduces positive predictions and may trade recall for precision",
            "leaves all predictions unchanged"
        ],
        "answer": 2
    },
    {
        "question": "A model's performance on genuinely unseen but relevant examples measures",
        "options": [
            "memorisation only",
            "generalisation",
            "the number of training epochs only",
            "the colour of the interface"
        ],
        "answer": 1
    },
    {
        "question": "Overall accuracy is similar across two groups but false-negative rates differ greatly. A review should examine",
        "options": [
            "group-wise error rates and fairness implications",
            "the number of model layers only",
            "the file extension",
            "only the overall accuracy"
        ],
        "answer": 0
    }
],
  hard: [
    {
        "question": "For numerical predictions, mean absolute error summarises",
        "options": [
            "the fraction of exact class labels",
            "the percentage of training records",
            "the number of false positives only",
            "the average absolute difference between predictions and actual values"
        ],
        "answer": 3
    },
    {
        "question": "Inspecting examples the model gets wrong can help identify",
        "options": [
            "the user's password",
            "the correct file path",
            "proof that the model is always correct",
            "systematic failure patterns and data problems"
        ],
        "answer": 3
    },
    {
        "question": "A test set drawn from a different population than the intended users may produce",
        "options": [
            "perfect fairness",
            "a misleading estimate of deployed performance",
            "no change in measured performance",
            "a guaranteed unbiased estimate"
        ],
        "answer": 1
    },
    {
        "question": "A model with higher precision but lower recall",
        "options": [
            "makes fewer false-positive errors among predicted positives but misses more actual positives in the relevant comparison",
            "has guaranteed higher accuracy",
            "has no false negatives",
            "must be better for every task"
        ],
        "answer": 0
    },
    {
        "question": "A model's accuracy declines after real-world patterns change. This is consistent with",
        "options": [
            "an unchanged evaluation population",
            "a fixed and permanent distribution",
            "perfect generalisation",
            "data or concept drift"
        ],
        "answer": 3
    },
    {
        "question": "A test result from only five examples is uncertain because",
        "options": [
            "the test set is the same as the model",
            "a small sample can produce unstable performance estimates",
            "five examples guarantee precision",
            "sample size never affects uncertainty"
        ],
        "answer": 1
    },
    {
        "question": "Repeatedly choosing a model based on test-set results weakens the test set because",
        "options": [
            "test examples become more representative automatically",
            "information from the test set leaks into model selection",
            "accuracy must fall to zero",
            "the labels become primary keys"
        ],
        "answer": 1
    },
    {
        "question": "For a binary classifier, TP + FP + TN + FN equals",
        "options": [
            "the number of correct positives only",
            "the number of model parameters",
            "the total number of evaluated cases",
            "the number of positive predictions only"
        ],
        "answer": 2
    },
    {
        "question": "A model has TP=42, TN=48, FP=6 and FN=4. Its accuracy is",
        "options": [
            "48%",
            "90%",
            "42%",
            "84%"
        ],
        "answer": 1
    },
    {
        "question": "A classifier has TP=36 and FN=9. Its recall is",
        "options": [
            "90%",
            "36%",
            "45%",
            "80%"
        ],
        "answer": 3
    },
    {
        "question": "A classifier has TP=30, FP=10, FN=20 and TN=40. Its precision is",
        "options": [
            "75%",
            "60%",
            "50%",
            "70%"
        ],
        "answer": 0
    },
    {
        "question": "A classifier has TP=30 and FN=20. Its recall is",
        "options": [
            "60%",
            "30%",
            "75%",
            "40%"
        ],
        "answer": 0
    },
    {
        "question": "A model has 84 correct predictions among 120 cases. Accuracy is",
        "options": [
            "70%",
            "30%",
            "60%",
            "84%"
        ],
        "answer": 0
    },
    {
        "question": "A screening model misses a serious condition in an affected person. This is",
        "options": [
            "a false positive",
            "a true positive",
            "a true negative",
            "a false negative"
        ],
        "answer": 3
    },
    {
        "question": "A spam filter marks a legitimate message as spam. This is",
        "options": [
            "a true negative",
            "a true positive",
            "a false negative",
            "a false positive"
        ],
        "answer": 3
    }
],
  tooHard: [
    {
        "question": "A fraud model labels a fraudulent transaction as fraud. This is",
        "options": [
            "a false negative",
            "a true positive",
            "a false positive",
            "a true negative"
        ],
        "answer": 1
    },
    {
        "question": "A model predicts legitimate transactions as legitimate. This is",
        "options": [
            "a true negative",
            "a true positive",
            "a false negative",
            "a false positive"
        ],
        "answer": 0
    },
    {
        "question": "A dataset has 98% non-fraud cases. Predicting non-fraud for every case yields 98% accuracy but",
        "options": [
            "perfect fraud detection",
            "zero recall for the fraud class",
            "perfect precision for fraud",
            "no false negatives"
        ],
        "answer": 1
    },
    {
        "question": "A medical triage system prioritises finding nearly all at-risk patients. The metric of particular importance is",
        "options": [
            "training time",
            "file size",
            "precision only",
            "recall"
        ],
        "answer": 3
    },
    {
        "question": "A content moderation system wants fewer false accusations. The metric to scrutinise is",
        "options": [
            "the number of features",
            "recall alone",
            "the font size",
            "precision"
        ],
        "answer": 3
    },
    {
        "question": "A model's training accuracy is high but its test accuracy is low. This indicates",
        "options": [
            "overfitting or a distribution difference",
            "no model error",
            "a correct data split in every case",
            "perfect generalisation"
        ],
        "answer": 0
    },
    {
        "question": "A model has poor scores on both training and test data. This can indicate",
        "options": [
            "data leakage necessarily",
            "perfect learning",
            "a test set that proves fairness",
            "underfitting"
        ],
        "answer": 3
    },
    {
        "question": "The test data includes a variable derived from the target after the outcome occurs. This is",
        "options": [
            "a true negative",
            "a valid deployment-time feature automatically",
            "a baseline",
            "data leakage"
        ],
        "answer": 3
    },
    {
        "question": "A validation set is used repeatedly to choose model settings. The final test set should be",
        "options": [
            "used in every training update",
            "discarded before evaluation",
            "kept separate until final evaluation",
            "combined with labels from the future"
        ],
        "answer": 2
    },
    {
        "question": "A model is evaluated on only examples from one city but deployed across many regions. The estimate may fail due to",
        "options": [
            "high precision by definition",
            "a perfect baseline",
            "lack of representative evaluation data",
            "too many confusion matrix cells"
        ],
        "answer": 2
    },
    {
        "question": "A model is tuned repeatedly to maximise its test score. This compromises",
        "options": [
            "the need for any training data",
            "the meaning of a feature",
            "the independence of the final test estimate",
            "the number of classes"
        ],
        "answer": 2
    },
    {
        "question": "A classifier's threshold is raised. In many cases, positive predictions become",
        "options": [
            "more frequent in every case",
            "less frequent",
            "unchanged by definition",
            "identical to the training labels"
        ],
        "answer": 1
    },
    {
        "question": "A confusion matrix contains TP=20, FP=5, FN=15, TN=60. Total evaluated cases equal",
        "options": [
            "80",
            "40",
            "100",
            "85"
        ],
        "answer": 2
    },
    {
        "question": "A model's recall is 1.0 for a class but precision is low. It likely",
        "options": [
            "misses every positive",
            "has no false positives",
            "finds all actual positives but also produces many false positives",
            "has perfect accuracy necessarily"
        ],
        "answer": 2
    },
    {
        "question": "A model performs worse after customer behaviour changes over time. This may be",
        "options": [
            "guaranteed overfitting prevention",
            "a page style error",
            "data or concept drift",
            "a primary-key violation"
        ],
        "answer": 2
    },
    {
        "question": "A reviewer compares two model reports. for numerical predictions, mean absolute error summarises",
        "options": [
            "the number of false positives only",
            "the fraction of exact class labels",
            "the percentage of training records",
            "the average absolute difference between predictions and actual values"
        ],
        "answer": 3
    },
    {
        "question": "A team tests the system with a new sample. inspecting examples the model gets wrong can help identify",
        "options": [
            "proof that the model is always correct",
            "the correct file path",
            "the user's password",
            "systematic failure patterns and data problems"
        ],
        "answer": 3
    },
    {
        "question": "A deployment audit records the following case. a test set drawn from a different population than the intended users may produce",
        "options": [
            "perfect fairness",
            "no change in measured performance",
            "a misleading estimate of deployed performance",
            "a guaranteed unbiased estimate"
        ],
        "answer": 2
    },
    {
        "question": "A practical assessment presents this situation. a model with higher precision but lower recall",
        "options": [
            "must be better for every task",
            "has no false negatives",
            "has guaranteed higher accuracy",
            "makes fewer false-positive errors among predicted positives but misses more actual positives in the relevant comparison"
        ],
        "answer": 3
    },
    {
        "question": "A project team documents an edge case. a model's accuracy declines after real-world patterns change. This is consistent with",
        "options": [
            "an unchanged evaluation population",
            "perfect generalisation",
            "data or concept drift",
            "a fixed and permanent distribution"
        ],
        "answer": 2
    }
],
  extreme: [
    {
        "question": "A reviewer compares two model reports. a test result from only five examples is uncertain because",
        "options": [
            "five examples guarantee precision",
            "the test set is the same as the model",
            "sample size never affects uncertainty",
            "a small sample can produce unstable performance estimates"
        ],
        "answer": 3
    },
    {
        "question": "A team tests the system with a new sample. repeatedly choosing a model based on test-set results weakens the test set because",
        "options": [
            "information from the test set leaks into model selection",
            "the labels become primary keys",
            "accuracy must fall to zero",
            "test examples become more representative automatically"
        ],
        "answer": 0
    },
    {
        "question": "A deployment audit records the following case. for a binary classifier, TP + FP + TN + FN equals",
        "options": [
            "the number of positive predictions only",
            "the number of correct positives only",
            "the total number of evaluated cases",
            "the number of model parameters"
        ],
        "answer": 2
    },
    {
        "question": "A practical assessment presents this situation. a model has TP=42, TN=48, FP=6 and FN=4. Its accuracy is",
        "options": [
            "48%",
            "84%",
            "42%",
            "90%"
        ],
        "answer": 3
    },
    {
        "question": "A project team documents an edge case. a classifier has TP=36 and FN=9. Its recall is",
        "options": [
            "45%",
            "36%",
            "90%",
            "80%"
        ],
        "answer": 3
    },
    {
        "question": "A reviewer compares two model reports. a classifier makes 90 correct predictions out of 100 evaluated examples. Its accuracy is",
        "options": [
            "100%",
            "10%",
            "9%",
            "90%"
        ],
        "answer": 3
    },
    {
        "question": "A team tests the system with a new sample. a true positive is a case that is",
        "options": [
            "actually positive and predicted positive",
            "actually negative and predicted negative",
            "actually negative and predicted positive",
            "actually positive and predicted negative"
        ],
        "answer": 0
    },
    {
        "question": "A deployment audit records the following case. a false positive is a case that is",
        "options": [
            "actually positive and predicted positive",
            "actually positive but predicted negative",
            "actually negative and predicted negative",
            "actually negative but predicted positive"
        ],
        "answer": 3
    },
    {
        "question": "A practical assessment presents this situation. a false negative is a case that is",
        "options": [
            "actually positive but predicted negative",
            "actually negative and predicted negative",
            "actually positive and predicted positive",
            "actually negative but predicted positive"
        ],
        "answer": 0
    },
    {
        "question": "A project team documents an edge case. a true negative is a case that is",
        "options": [
            "actually negative and predicted negative",
            "actually negative but predicted positive",
            "actually positive and predicted positive",
            "actually positive but predicted negative"
        ],
        "answer": 0
    },
    {
        "question": "A reviewer compares two model reports. precision is calculated as",
        "options": [
            "TP / (TP + FN)",
            "(TP + TN) / total",
            "TP / (TP + FP)",
            "TN / (TN + FP)"
        ],
        "answer": 2
    },
    {
        "question": "A team tests the system with a new sample. recall is calculated as",
        "options": [
            "FP / (TP + FP)",
            "TP / (TP + FP)",
            "TN / (TN + FN)",
            "TP / (TP + FN)"
        ],
        "answer": 3
    },
    {
        "question": "A deployment audit records the following case. the F1 score is the harmonic mean of",
        "options": [
            "specificity and sample size",
            "precision and recall",
            "training time and test time",
            "accuracy and error rate"
        ],
        "answer": 1
    },
    {
        "question": "A practical assessment presents this situation. a model predicts 'not fraud' for every case when only 1% of cases are fraud. It may show high accuracy but",
        "options": [
            "eliminate class imbalance",
            "guarantee useful performance",
            "fail to detect the minority fraud class",
            "have perfect recall for fraud"
        ],
        "answer": 2
    },
    {
        "question": "A project team documents an edge case. for a screening task where missing a real positive case is especially costly, the metric to emphasise is often",
        "options": [
            "file size",
            "training accuracy only",
            "recall",
            "precision alone in every situation"
        ],
        "answer": 2
    },
    {
        "question": "A reviewer compares two model reports. when false alarms are expensive and predicted positives must be reliable, the metric to emphasise is often",
        "options": [
            "recall alone in every situation",
            "number of features",
            "precision",
            "training time"
        ],
        "answer": 2
    },
    {
        "question": "A team tests the system with a new sample. a model scores 99% on training data and 68% on unseen test data. The pattern suggests",
        "options": [
            "no need for further evaluation",
            "guaranteed unbiased data",
            "perfect generalisation",
            "overfitting or a train-test distribution mismatch"
        ],
        "answer": 3
    },
    {
        "question": "A deployment audit records the following case. a model performs poorly on both training and test sets. This may indicate",
        "options": [
            "a perfect decision boundary",
            "underfitting or an inadequate model/features",
            "data leakage necessarily",
            "perfect fit"
        ],
        "answer": 1
    },
    {
        "question": "A practical assessment presents this situation. a feature contains information that would only become available after the event being predicted. Using it causes",
        "options": [
            "data leakage and unrealistic evaluation",
            "guaranteed fairness",
            "underfitting by definition",
            "improved real-time validity"
        ],
        "answer": 0
    },
    {
        "question": "A project team documents an edge case. a test set should remain separate from repeated model tuning so that it",
        "options": [
            "becomes part of every training iteration",
            "can be used to choose every hyperparameter",
            "guarantees 100% accuracy",
            "provides a less biased final estimate of generalisation"
        ],
        "answer": 3
    },
    {
        "question": "A reviewer compares two model reports. a validation set is commonly used to",
        "options": [
            "compare models or tune settings before final testing",
            "store the output labels only",
            "prove the model is ethical by itself",
            "replace all training data"
        ],
        "answer": 0
    },
    {
        "question": "A team tests the system with a new sample. a baseline model is valuable because it",
        "options": [
            "provides a reference point for judging improvement",
            "replaces evaluation metrics",
            "uses all data for training",
            "guarantees the final model is fair"
        ],
        "answer": 0
    },
    {
        "question": "A deployment audit records the following case. raising a binary classifier's positive threshold often",
        "options": [
            "reduces positive predictions and may trade recall for precision",
            "converts classification into image segmentation",
            "increases every metric automatically",
            "leaves all predictions unchanged"
        ],
        "answer": 0
    },
    {
        "question": "A practical assessment presents this situation. a model's performance on genuinely unseen but relevant examples measures",
        "options": [
            "memorisation only",
            "the colour of the interface",
            "the number of training epochs only",
            "generalisation"
        ],
        "answer": 3
    },
    {
        "question": "A project team documents an edge case. overall accuracy is similar across two groups but false-negative rates differ greatly. A review should examine",
        "options": [
            "group-wise error rates and fairness implications",
            "the number of model layers only",
            "only the overall accuracy",
            "the file extension"
        ],
        "answer": 0
    }
],
};
