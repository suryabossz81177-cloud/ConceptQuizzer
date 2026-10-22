/* Class 10 Artificial Intelligence (417): NCERT/CBSE-aligned board-style practice. */
window.QuizData = window.QuizData || {};
window.QuizData["10-artificialintelligence-computer-vision-cv"] = {
  easy: [
    {
        "question": "A system identifies the location of each car in a road image and draws a box around it. This task is",
        "options": [
            "sentiment analysis",
            "object detection",
            "text summarisation",
            "data normalisation"
        ],
        "answer": 1
    },
    {
        "question": "Assigning each pixel in a medical image to a tissue category is",
        "options": [
            "speech recognition",
            "image segmentation",
            "regression only",
            "document classification"
        ],
        "answer": 1
    },
    {
        "question": "Giving an entire image the label 'forest' without locating individual objects is",
        "options": [
            "object detection",
            "tokenisation",
            "machine translation",
            "image classification"
        ],
        "answer": 3
    },
    {
        "question": "A digital image is represented computationally as",
        "options": [
            "a list of spoken phonemes only",
            "a grid of pixels with numerical values",
            "a set of database relationships",
            "a paragraph of tokens"
        ],
        "answer": 1
    },
    {
        "question": "In the RGB model, a pixel colour is represented through",
        "options": [
            "red, green and blue channel values",
            "recall, gain and bias",
            "three text tokens",
            "rows, groups and batches"
        ],
        "answer": 0
    },
    {
        "question": "A grayscale image generally represents each pixel using",
        "options": [
            "a word's part of speech",
            "only three independent colour channels",
            "intensity rather than separate RGB colour channels",
            "a list of labels only"
        ],
        "answer": 2
    },
    {
        "question": "An image of 1920 × 1080 has more pixels than one of 640 × 480. At equal bit depth, it generally requires",
        "options": [
            "more storage for uncompressed pixel data",
            "less pixel storage",
            "no pixel storage",
            "only text storage"
        ],
        "answer": 0
    },
    {
        "question": "A colour image has dimensions 100 × 100 with three 8-bit channels. Its raw pixel data size is",
        "options": [
            "30,000 bits",
            "240,000 bits",
            "300 bits",
            "80,000 bits"
        ],
        "answer": 1
    },
    {
        "question": "A vision model trained only on bright daylight images may struggle with night scenes due to",
        "options": [
            "tokenisation",
            "a change in database primary key",
            "a distribution or lighting shift",
            "guaranteed overfitting prevention"
        ],
        "answer": 2
    },
    {
        "question": "Training images with different orientations and backgrounds can help a model",
        "options": [
            "guarantee perfect accuracy",
            "learn features robust to such variation, if relevant and labelled correctly",
            "remove the need for testing",
            "turn images into text only"
        ],
        "answer": 1
    }
],
  medium: [
    {
        "question": "Edges, textures and shapes in images can act as",
        "options": [
            "visual features useful for recognition",
            "evaluation splits",
            "language tokens",
            "labels in every dataset"
        ],
        "answer": 0
    },
    {
        "question": "A vision dataset where every dog image is taken indoors may cause",
        "options": [
            "guaranteed outdoor accuracy",
            "perfect colour invariance",
            "poor generalisation to outdoor dog images",
            "zero need for test images"
        ],
        "answer": 2
    },
    {
        "question": "A detector labels an empty road patch as containing a pedestrian. This is a",
        "options": [
            "false positive",
            "false negative",
            "true positive",
            "true negative"
        ],
        "answer": 0
    },
    {
        "question": "A safety camera fails to detect a pedestrian who is actually present. This is a",
        "options": [
            "false negative",
            "true positive",
            "false positive",
            "true negative"
        ],
        "answer": 0
    },
    {
        "question": "Drawing bounding boxes around cars in training images is a form of",
        "options": [
            "stemming",
            "tokenisation",
            "data annotation",
            "data encryption"
        ],
        "answer": 2
    },
    {
        "question": "A face-recognition model performs unevenly across demographic groups. The concern includes",
        "options": [
            "a spreadsheet formula error",
            "guaranteed fairness",
            "bias and unequal error rates",
            "image resolution alone"
        ],
        "answer": 2
    },
    {
        "question": "A school camera project should avoid retaining identifiable images longer than needed. This applies",
        "options": [
            "image sharpening",
            "token splitting",
            "data minimisation and privacy protection",
            "colour quantisation"
        ],
        "answer": 2
    },
    {
        "question": "In a convolutional neural network, convolutional filters are commonly used to",
        "options": [
            "learn local patterns such as edges and textures",
            "store image labels as passwords",
            "translate every word into another language",
            "calculate only spreadsheet averages"
        ],
        "answer": 0
    },
    {
        "question": "A pooling layer commonly reduces",
        "options": [
            "the spatial dimensions of feature maps",
            "the need for labelled data in all cases",
            "the number of colour channels to three always",
            "the number of image classes to exactly one"
        ],
        "answer": 0
    },
    {
        "question": "A vision model performs well on training images but fails on new camera images. The result suggests",
        "options": [
            "the labels are always correct",
            "no need for evaluation",
            "perfect deployment readiness",
            "poor generalisation"
        ],
        "answer": 3
    }
],
  hard: [
    {
        "question": "A model outputs probabilities for 'cat', 'dog' and 'rabbit'. Selecting the highest probability is a common way to",
        "options": [
            "calculate recall directly",
            "create a grayscale image",
            "draw a bounding box automatically in every model",
            "choose a predicted class"
        ],
        "answer": 3
    },
    {
        "question": "Near-duplicate images from the same video appear in both train and test sets. The test score may be",
        "options": [
            "a guaranteed unbiased estimate",
            "overly optimistic due to data leakage",
            "unrelated to the split",
            "always lower than real performance"
        ],
        "answer": 1
    },
    {
        "question": "Blurred images obscure object boundaries. The likely effect is",
        "options": [
            "guaranteed higher accuracy",
            "a change to language tokens",
            "automatic label correction",
            "reduced reliability of visual features"
        ],
        "answer": 3
    },
    {
        "question": "A system outlines diseased regions within a leaf rather than assigning one label to the whole leaf. The suitable task is",
        "options": [
            "classification only",
            "speech synthesis",
            "sentiment analysis",
            "segmentation"
        ],
        "answer": 3
    },
    {
        "question": "A shop camera counts each visible customer, including their positions. A suitable CV approach is",
        "options": [
            "spell checking",
            "topic modelling",
            "object detection with tracking/counting logic",
            "text summarisation"
        ],
        "answer": 2
    },
    {
        "question": "In a standard 8-bit-per-channel RGB image, each channel can take",
        "options": [
            "3 values only",
            "256 intensity values from 0 to 255",
            "8 values from 1 to 8",
            "1024 values from 1 to 1024"
        ],
        "answer": 1
    },
    {
        "question": "Doubling both image width and height while keeping bit depth fixed makes raw pixel count",
        "options": [
            "twice as large",
            "half as large",
            "unchanged",
            "four times as large"
        ],
        "answer": 3
    },
    {
        "question": "Testing images from different cameras and weather conditions measures aspects of",
        "options": [
            "language fluency",
            "robustness under changing conditions",
            "the model's font size",
            "database referential integrity"
        ],
        "answer": 1
    },
    {
        "question": "A vision model flags a medical scan as suspicious. The appropriate workflow is",
        "options": [
            "qualified human review alongside model output",
            "treating the score as certainty",
            "deletion of the scan",
            "automatic diagnosis without validation"
        ],
        "answer": 0
    },
    {
        "question": "A basic supervised image-classification pipeline needs images, labels, training, and",
        "options": [
            "a primary key in every pixel",
            "speech transcripts only",
            "no validation",
            "evaluation on separate data"
        ],
        "answer": 3
    },
    {
        "question": "A traffic camera must identify each vehicle and return a rectangle around it. This is",
        "options": [
            "text generation",
            "sentiment analysis",
            "lemmatisation",
            "object detection"
        ],
        "answer": 3
    },
    {
        "question": "A crop image must be divided into diseased and healthy pixel regions. This is",
        "options": [
            "regression of text",
            "speech recognition",
            "image segmentation",
            "whole-image classification only"
        ],
        "answer": 2
    },
    {
        "question": "A model receives 256 × 256 RGB images. Each pixel has three colour channels because",
        "options": [
            "resolution means three pixels",
            "each pixel stores three words",
            "RGB stores red, green and blue intensities",
            "the image contains three classes"
        ],
        "answer": 2
    },
    {
        "question": "A 200 × 100 grayscale image uses 8 bits per pixel. Its uncompressed pixel data is",
        "options": [
            "160,000 bits",
            "20,000 bits",
            "80,000 bits",
            "200 bits"
        ],
        "answer": 0
    },
    {
        "question": "A dataset labels only the central object even when several objects appear. A detector trained on it may",
        "options": [
            "need no test data",
            "learn incomplete object annotations",
            "become a language model",
            "guarantee perfect detection"
        ],
        "answer": 1
    }
],
  tooHard: [
    {
        "question": "A face detector works on studio photos but fails in low light. The likely issue includes",
        "options": [
            "the number of language tokens",
            "a confusion matrix for text",
            "training-data coverage and lighting variation",
            "database normalisation"
        ],
        "answer": 2
    },
    {
        "question": "A model labels a bicycle as a motorcycle. This is an example of",
        "options": [
            "misclassification",
            "correct localisation necessarily",
            "tokenisation",
            "a true negative in every context"
        ],
        "answer": 0
    },
    {
        "question": "A safety system detects nearly all pedestrians but also flags many shadows. Its pattern may indicate",
        "options": [
            "zero false positives",
            "no need for evaluation",
            "perfect precision",
            "high recall with reduced precision"
        ],
        "answer": 3
    },
    {
        "question": "A system fails to identify a real pedestrian. In a binary detection setup, this is",
        "options": [
            "a true negative",
            "a true positive",
            "a false negative",
            "a false positive"
        ],
        "answer": 2
    },
    {
        "question": "A model identifies a pedestrian where none exists. This is",
        "options": [
            "a false positive",
            "a true positive",
            "a true negative",
            "a false negative"
        ],
        "answer": 0
    },
    {
        "question": "A camera's new image format changes colour intensity statistics. A deployed model may face",
        "options": [
            "text stemming",
            "a database primary-key change",
            "a guaranteed improvement",
            "input distribution shift"
        ],
        "answer": 3
    },
    {
        "question": "A CNN learns edges in early layers and more complex patterns later. These are",
        "options": [
            "database fields",
            "language stop words",
            "evaluation labels only",
            "hierarchical visual features"
        ],
        "answer": 3
    },
    {
        "question": "Downsampling an image reduces its spatial dimensions and may",
        "options": [
            "guarantee better detection",
            "remove fine details while lowering computation",
            "convert RGB into spoken language",
            "increase all details automatically"
        ],
        "answer": 1
    },
    {
        "question": "A test set contains near-identical frames from the training video. Reported performance may be inflated by",
        "options": [
            "data leakage",
            "perfect independence",
            "low resolution only",
            "language ambiguity"
        ],
        "answer": 0
    },
    {
        "question": "A vision model's false-negative rate is much higher for one demographic group. This raises",
        "options": [
            "an issue with page styles",
            "a guarantee of balanced outcomes",
            "fairness and safety concerns",
            "a problem with tokenisation"
        ],
        "answer": 2
    },
    {
        "question": "A school stores identifiable face images after attendance processing is complete without a valid need. The concern is",
        "options": [
            "the number of classes",
            "precision only",
            "privacy and data retention",
            "image dimensions"
        ],
        "answer": 2
    },
    {
        "question": "A system outlines the boundary of each object instead of assigning one label to the full image. This requires",
        "options": [
            "data acquisition only",
            "text classification",
            "segmentation",
            "sentiment analysis"
        ],
        "answer": 2
    },
    {
        "question": "A model predicts 'cat' with 0.51 and 'dog' with 0.49. The class prediction is",
        "options": [
            "cat, under the highest-score rule",
            "both labels with certainty",
            "dog, because 0.49 is lower",
            "neither because probabilities cannot be used"
        ],
        "answer": 0
    },
    {
        "question": "An image is doubled in width and height. The pixel count becomes",
        "options": [
            "unchanged",
            "half the original",
            "twice the original",
            "four times the original"
        ],
        "answer": 3
    },
    {
        "question": "An evaluation includes images from different cameras and weather conditions. It probes",
        "options": [
            "language fluency",
            "robustness to real-world variation",
            "the number of text tokens",
            "database relationships"
        ],
        "answer": 1
    },
    {
        "question": "A reviewer compares two model reports. a model outputs probabilities for 'cat', 'dog' and 'rabbit'. Selecting the highest probability is a common way to",
        "options": [
            "draw a bounding box automatically in every model",
            "choose a predicted class",
            "calculate recall directly",
            "create a grayscale image"
        ],
        "answer": 1
    },
    {
        "question": "A team tests the system with a new sample. near-duplicate images from the same video appear in both train and test sets. The test score may be",
        "options": [
            "overly optimistic due to data leakage",
            "unrelated to the split",
            "always lower than real performance",
            "a guaranteed unbiased estimate"
        ],
        "answer": 0
    },
    {
        "question": "A deployment audit records the following case. blurred images obscure object boundaries. The likely effect is",
        "options": [
            "guaranteed higher accuracy",
            "automatic label correction",
            "reduced reliability of visual features",
            "a change to language tokens"
        ],
        "answer": 2
    },
    {
        "question": "A practical assessment presents this situation. a system outlines diseased regions within a leaf rather than assigning one label to the whole leaf. The suitable task is",
        "options": [
            "speech synthesis",
            "classification only",
            "sentiment analysis",
            "segmentation"
        ],
        "answer": 3
    },
    {
        "question": "A project team documents an edge case. a shop camera counts each visible customer, including their positions. A suitable CV approach is",
        "options": [
            "topic modelling",
            "object detection with tracking/counting logic",
            "text summarisation",
            "spell checking"
        ],
        "answer": 1
    }
],
  extreme: [
    {
        "question": "A reviewer compares two model reports. in a standard 8-bit-per-channel RGB image, each channel can take",
        "options": [
            "1024 values from 1 to 1024",
            "256 intensity values from 0 to 255",
            "3 values only",
            "8 values from 1 to 8"
        ],
        "answer": 1
    },
    {
        "question": "A team tests the system with a new sample. doubling both image width and height while keeping bit depth fixed makes raw pixel count",
        "options": [
            "half as large",
            "unchanged",
            "four times as large",
            "twice as large"
        ],
        "answer": 2
    },
    {
        "question": "A deployment audit records the following case. testing images from different cameras and weather conditions measures aspects of",
        "options": [
            "the model's font size",
            "robustness under changing conditions",
            "database referential integrity",
            "language fluency"
        ],
        "answer": 1
    },
    {
        "question": "A practical assessment presents this situation. a vision model flags a medical scan as suspicious. The appropriate workflow is",
        "options": [
            "qualified human review alongside model output",
            "treating the score as certainty",
            "automatic diagnosis without validation",
            "deletion of the scan"
        ],
        "answer": 0
    },
    {
        "question": "A project team documents an edge case. a basic supervised image-classification pipeline needs images, labels, training, and",
        "options": [
            "a primary key in every pixel",
            "evaluation on separate data",
            "no validation",
            "speech transcripts only"
        ],
        "answer": 1
    },
    {
        "question": "A reviewer compares two model reports. a system identifies the location of each car in a road image and draws a box around it. This task is",
        "options": [
            "text summarisation",
            "object detection",
            "data normalisation",
            "sentiment analysis"
        ],
        "answer": 1
    },
    {
        "question": "A team tests the system with a new sample. assigning each pixel in a medical image to a tissue category is",
        "options": [
            "regression only",
            "image segmentation",
            "speech recognition",
            "document classification"
        ],
        "answer": 1
    },
    {
        "question": "A deployment audit records the following case. giving an entire image the label 'forest' without locating individual objects is",
        "options": [
            "machine translation",
            "tokenisation",
            "object detection",
            "image classification"
        ],
        "answer": 3
    },
    {
        "question": "A practical assessment presents this situation. a digital image is represented computationally as",
        "options": [
            "a grid of pixels with numerical values",
            "a list of spoken phonemes only",
            "a paragraph of tokens",
            "a set of database relationships"
        ],
        "answer": 0
    },
    {
        "question": "A project team documents an edge case. in the RGB model, a pixel colour is represented through",
        "options": [
            "rows, groups and batches",
            "three text tokens",
            "recall, gain and bias",
            "red, green and blue channel values"
        ],
        "answer": 3
    },
    {
        "question": "A reviewer compares two model reports. a grayscale image generally represents each pixel using",
        "options": [
            "only three independent colour channels",
            "a list of labels only",
            "intensity rather than separate RGB colour channels",
            "a word's part of speech"
        ],
        "answer": 2
    },
    {
        "question": "A team tests the system with a new sample. an image of 1920 × 1080 has more pixels than one of 640 × 480. At equal bit depth, it generally requires",
        "options": [
            "less pixel storage",
            "only text storage",
            "no pixel storage",
            "more storage for uncompressed pixel data"
        ],
        "answer": 3
    },
    {
        "question": "A deployment audit records the following case. a colour image has dimensions 100 × 100 with three 8-bit channels. Its raw pixel data size is",
        "options": [
            "30,000 bits",
            "240,000 bits",
            "80,000 bits",
            "300 bits"
        ],
        "answer": 1
    },
    {
        "question": "A practical assessment presents this situation. a vision model trained only on bright daylight images may struggle with night scenes due to",
        "options": [
            "tokenisation",
            "a distribution or lighting shift",
            "a change in database primary key",
            "guaranteed overfitting prevention"
        ],
        "answer": 1
    },
    {
        "question": "A project team documents an edge case. training images with different orientations and backgrounds can help a model",
        "options": [
            "remove the need for testing",
            "guarantee perfect accuracy",
            "turn images into text only",
            "learn features robust to such variation, if relevant and labelled correctly"
        ],
        "answer": 3
    },
    {
        "question": "A reviewer compares two model reports. edges, textures and shapes in images can act as",
        "options": [
            "labels in every dataset",
            "language tokens",
            "evaluation splits",
            "visual features useful for recognition"
        ],
        "answer": 3
    },
    {
        "question": "A team tests the system with a new sample. a vision dataset where every dog image is taken indoors may cause",
        "options": [
            "poor generalisation to outdoor dog images",
            "guaranteed outdoor accuracy",
            "zero need for test images",
            "perfect colour invariance"
        ],
        "answer": 0
    },
    {
        "question": "A deployment audit records the following case. a detector labels an empty road patch as containing a pedestrian. This is a",
        "options": [
            "true positive",
            "false positive",
            "true negative",
            "false negative"
        ],
        "answer": 1
    },
    {
        "question": "A practical assessment presents this situation. a safety camera fails to detect a pedestrian who is actually present. This is a",
        "options": [
            "true positive",
            "true negative",
            "false positive",
            "false negative"
        ],
        "answer": 3
    },
    {
        "question": "A project team documents an edge case. drawing bounding boxes around cars in training images is a form of",
        "options": [
            "tokenisation",
            "data annotation",
            "data encryption",
            "stemming"
        ],
        "answer": 1
    },
    {
        "question": "A reviewer compares two model reports. a face-recognition model performs unevenly across demographic groups. The concern includes",
        "options": [
            "a spreadsheet formula error",
            "image resolution alone",
            "guaranteed fairness",
            "bias and unequal error rates"
        ],
        "answer": 3
    },
    {
        "question": "A team tests the system with a new sample. a school camera project should avoid retaining identifiable images longer than needed. This applies",
        "options": [
            "colour quantisation",
            "image sharpening",
            "data minimisation and privacy protection",
            "token splitting"
        ],
        "answer": 2
    },
    {
        "question": "A deployment audit records the following case. in a convolutional neural network, convolutional filters are commonly used to",
        "options": [
            "store image labels as passwords",
            "translate every word into another language",
            "calculate only spreadsheet averages",
            "learn local patterns such as edges and textures"
        ],
        "answer": 3
    },
    {
        "question": "A practical assessment presents this situation. a pooling layer commonly reduces",
        "options": [
            "the number of colour channels to three always",
            "the number of image classes to exactly one",
            "the spatial dimensions of feature maps",
            "the need for labelled data in all cases"
        ],
        "answer": 2
    },
    {
        "question": "A project team documents an edge case. a vision model performs well on training images but fails on new camera images. The result suggests",
        "options": [
            "no need for evaluation",
            "the labels are always correct",
            "poor generalisation",
            "perfect deployment readiness"
        ],
        "answer": 2
    }
],
};
