// Class 10 Artificial Intelligence — ultra-detailed continuous chapter
const ChapterData = {
  "id": "10-artificialintelligence-computer-vision-cv",
  "title": "Computer Vision (CV)",
  "file": "computer-vision-cv.js",
  "description": "A continuous chapter on visual data, pixels, features, image processing, OpenCV, RGB images, convolution and CNN concepts.",
  "summary": "Computer Vision processes visual information by representing images numerically and learning or extracting patterns for useful tasks.",
  "sections": [
    {
      "title": "Computer Vision",
      "blocks": [
        {
          "type": "paragraph",
          "title": "3.1 Introduction to Computer Vision",
          "text": "Computer Vision is an AI domain concerned with enabling computers to obtain useful information from images or other visual inputs. Human vision combines eyes, brain processing, context and experience. A computer does not see an image in exactly the human sense; it receives numerical representations of pixels and processes patterns in those values. Computer Vision methods transform visual data into information that can support classification, detection, recognition or other tasks."
        },
        {
          "type": "paragraph",
          "title": "3.2 Why Computer Vision Matters",
          "text": "Images and video contain large amounts of information. A person can often recognise an object, read a sign or notice a change quickly. Computer Vision attempts to automate selected parts of such visual interpretation. Applications include image search, document scanning, quality inspection, accessibility tools, medical image analysis, traffic monitoring and security systems, subject to appropriate safeguards."
        },
        {
          "type": "exam",
          "title": "Exam Focus",
          "question": "What is Computer Vision?",
          "answer": "Computer Vision is an AI domain that enables computers to process and analyse visual information such as images and video to perform tasks such as recognition, classification or detection."
        },
        {
          "type": "paragraph",
          "title": "3.3 How a Computer Represents an Image",
          "text": "A digital image is represented as a grid of pixels. Each pixel stores numerical information describing the colour or intensity at a particular location. A grayscale image can use a single intensity value for each pixel, while a colour image can use multiple channels. The computer processes these numerical values rather than receiving the visual scene as a human does."
        },
        {
          "type": "data",
          "title": "3.4 Pixel Representation",
          "headers": [
            "Concept",
            "Explanation"
          ],
          "rows": [
            [
              "Pixel",
              "Smallest addressable picture element in a digital image"
            ],
            [
              "Image dimensions",
              "Number of pixels along width and height"
            ],
            [
              "Grayscale",
              "Represents intensity, commonly with one value per pixel"
            ],
            [
              "Colour channels",
              "Separate numerical components used to represent colour"
            ],
            [
              "Pixel pattern",
              "Spatial arrangement of values that can contain useful visual information"
            ]
          ],
          "text": ""
        },
        {
          "type": "comic",
          "title": "Comic: How does a computer see?",
          "dialogues": [
            {
              "character": "Surya",
              "dialogue": "When I look at this photo, I immediately recognise the object."
            },
            {
              "character": "Verma Sir",
              "dialogue": "A computer begins with numerical pixel values arranged in a grid."
            },
            {
              "character": "Surya",
              "dialogue": "So the model has to learn patterns in those numbers."
            },
            {
              "character": "Verma Sir",
              "dialogue": "Exactly. Computer Vision turns visual input into data that algorithms can analyse."
            }
          ]
        },
        {
          "type": "paragraph",
          "title": "3.5 Image Features",
          "text": "A feature is a useful property or pattern that helps distinguish one visual input from another. Simple features can include edges, shapes, textures, brightness changes or colour information. More advanced systems can learn useful representations automatically. Features matter because a model needs information that separates relevant classes or identifies meaningful structures."
        },
        {
          "type": "paragraph",
          "title": "3.6 Edges, Shapes and Patterns",
          "text": "An edge is a location where image intensity or colour changes noticeably. Edges can help reveal boundaries of objects. Shapes describe geometric structure, while textures describe repeated local patterns. A computer vision system can combine such information to build a representation useful for the task it has been designed to perform."
        },
        {
          "type": "practice",
          "title": "Visual Thinking",
          "question": "Why can an edge be useful in image analysis?",
          "answer": "An edge can indicate a boundary where the visual properties change, helping a system identify the shape or outline of an object."
        },
        {
          "type": "paragraph",
          "title": "3.7 Image Classification",
          "text": "Image classification assigns an image to one or more predefined categories. For example, a model might classify an image as containing a cat or a dog. During learning, the model is exposed to examples and learns patterns associated with the labels. During use, a new image is processed and the model produces a predicted class."
        },
        {
          "type": "paragraph",
          "title": "3.8 Recognition and Detection",
          "text": "Recognition focuses on identifying what an image contains or which known category it belongs to. Detection goes further by locating objects within an image, often using bounding regions. These tasks are related but not identical. A system can recognise the presence of an object without precisely locating every occurrence of it."
        },
        {
          "type": "paragraph",
          "title": "3.9 OpenCV and Practical Image Processing",
          "text": "OpenCV is a widely used computer vision library that provides tools for working with images and video. In introductory practical work, it can be used to load images, inspect properties, resize them, convert colour spaces and perform basic processing. The important learning idea is that visual processing can be implemented as a sequence of computational operations on image data."
        },
        {
          "type": "data",
          "title": "3.10 Typical Image Processing Flow",
          "headers": [
            "Step",
            "Purpose"
          ],
          "rows": [
            [
              "Acquire image",
              "Obtain a digital image from a file, camera or other source"
            ],
            [
              "Read image",
              "Load the pixel data into a program"
            ],
            [
              "Pre-process",
              "Resize, crop, convert or otherwise prepare the input"
            ],
            [
              "Extract or learn patterns",
              "Identify useful visual information"
            ],
            [
              "Predict or analyse",
              "Produce a classification, detection or other result"
            ],
            [
              "Inspect output",
              "Check whether the result is suitable"
            ]
          ],
          "text": ""
        },
        {
          "type": "exam",
          "title": "Exam Focus",
          "question": "What is the role of OpenCV in Computer Vision?",
          "answer": "OpenCV provides programming tools and functions for reading, processing and analysing images and video, making it useful for implementing basic computer vision tasks."
        },
        {
          "type": "paragraph",
          "title": "3.11 RGB Images",
          "text": "A common colour representation uses three channels: red, green and blue. Each pixel has a numerical value for each channel, and the combination represents a colour. By examining these channels, software can manipulate colour information and perform operations such as conversion, enhancement or segmentation. The exact numeric range depends on the representation used by the software."
        },
        {
          "type": "data",
          "title": "3.12 RGB Concept",
          "headers": [
            "Channel",
            "Role"
          ],
          "rows": [
            [
              "Red",
              "Contribution of red component"
            ],
            [
              "Green",
              "Contribution of green component"
            ],
            [
              "Blue",
              "Contribution of blue component"
            ]
          ],
          "text": "Combining channel values produces the displayed colour of a pixel in an RGB representation."
        },
        {
          "type": "paragraph",
          "title": "3.13 Image Size and Resolution",
          "text": "Image dimensions describe how many pixels make up the width and height. More pixels can provide greater spatial detail, but larger images also require more storage and processing. Resolution should therefore be considered in relation to the task. A model that only needs broad colour or shape information may not need extremely large images."
        },
        {
          "type": "paragraph",
          "title": "3.14 Pre-processing",
          "text": "Pre-processing prepares visual data before analysis. Common operations include resizing, cropping, changing colour representation, adjusting brightness or reducing irrelevant variation. The goal is not to alter an image arbitrarily but to make the input more suitable and consistent for the intended task."
        },
        {
          "type": "exam",
          "title": "Application Question",
          "question": "Why is pre-processing useful in a Computer Vision project?",
          "answer": "Pre-processing can make images more consistent, reduce irrelevant variation and convert the input into a form better suited to the chosen analysis or model."
        },
        {
          "type": "paragraph",
          "title": "3.15 Convolution as an Image Operation",
          "text": "Convolution is a mathematical operation that combines a small matrix called a kernel or filter with neighbouring pixel values to produce a new image or feature representation. Different kernels can emphasise edges, blur an image or highlight other local patterns. In introductory study, convolution is important because it shows how local visual patterns can be extracted systematically."
        },
        {
          "type": "paragraph",
          "title": "3.16 Convolutional Neural Networks",
          "text": "A Convolutional Neural Network, or CNN, is a neural-network architecture designed to work effectively with grid-like data such as images. Convolutional layers can learn filters that respond to useful visual patterns. Early layers may capture simpler patterns, while deeper layers can combine them into more complex representations. Pooling or related operations may reduce spatial dimensions and help manage computation."
        },
        {
          "type": "data",
          "title": "3.17 CNN Components",
          "headers": [
            "Component",
            "Basic role"
          ],
          "rows": [
            [
              "Convolution layer",
              "Applies learned filters to detect local patterns"
            ],
            [
              "Activation",
              "Introduces non-linearity into the network"
            ],
            [
              "Pooling or downsampling",
              "Reduces spatial dimensions while retaining useful information"
            ],
            [
              "Later layers",
              "Combine learned features into richer representations"
            ],
            [
              "Output layer",
              "Produces the task-specific prediction"
            ]
          ],
          "text": ""
        },
        {
          "type": "comic",
          "title": "Comic: From pixels to meaning",
          "dialogues": [
            {
              "character": "Shashank",
              "dialogue": "The first layer does not need to understand the whole object."
            },
            {
              "character": "Surya",
              "dialogue": "It can learn small patterns such as edges."
            },
            {
              "character": "Sharma Sir",
              "dialogue": "Later layers can combine simpler patterns into more complex features."
            },
            {
              "character": "Shashank",
              "dialogue": "So the network builds a representation step by step."
            }
          ]
        },
        {
          "type": "paragraph",
          "title": "3.18 Computer Vision and Data Quality",
          "text": "A vision model depends strongly on the examples used to train or test it. If the images are blurry, incorrectly labelled, unbalanced or unrepresentative, the resulting model may perform poorly. Lighting, camera angle, background, object size and image quality can all influence performance. A reliable project therefore pays attention to data collection and evaluation rather than focusing only on the algorithm."
        },
        {
          "type": "paragraph",
          "title": "3.19 Responsible Use of Vision Systems",
          "text": "Computer Vision can affect privacy and safety when cameras or images are used to identify or monitor people. Projects should consider purpose limitation, appropriate access, secure handling of data, consent where required and the consequences of errors. The ability to build a system does not by itself justify every possible use."
        },
        {
          "type": "exam",
          "title": "Long Answer",
          "question": "Explain the importance of pixels, features and models in Computer Vision.",
          "answer": "Pixels provide the numerical representation of the visual input. Features are useful patterns or properties extracted from pixel information. A model uses these representations to perform a task such as classification or detection. Together they form a pipeline from raw visual data to a meaningful output."
        },
        {
          "type": "practice",
          "title": "Compare",
          "question": "Differentiate image classification and object detection.",
          "answer": "Image classification assigns an image to one or more categories. Object detection identifies objects and also determines where they occur within the image, commonly using bounding regions."
        },
        {
          "type": "paragraph",
          "title": "3.20 Summary of Computer Vision",
          "text": "Computer Vision begins with visual data, represents it numerically as pixels, prepares the data, identifies or learns useful patterns and produces an output for the intended task. Basic image processing and tools such as OpenCV provide practical foundations. More advanced methods such as convolution and CNNs show how models can learn hierarchical visual representations. Throughout the process, data quality and responsible use remain essential."
        },
        {
          "type": "exam",
          "title": "Final Revision",
          "question": "List the major concepts covered in Computer Vision.",
          "answer": "The major concepts include visual input, pixels, image representation, image features, classification, detection, image pre-processing, RGB colour representation, OpenCV, convolution and the basic idea of convolutional neural networks."
        }
      ]
    },
    {
      "title": "Extended Board-Style Revision and Application",
      "blocks": [
        {
          "type": "exam",
          "title": "Board Revision 1",
          "question": "What is a pixel?",
          "answer": "A pixel is a small picture element represented by numerical visual information."
        },
        {
          "type": "paragraph",
          "title": "Application Note 1",
          "text": "In an examination or project, connect the definition to the purpose, describe the process in the correct order, and use a concrete example to show that the concept has been understood. The exact application should remain consistent with the problem being discussed."
        },
        {
          "type": "exam",
          "title": "Board Revision 2",
          "question": "What is an image feature?",
          "answer": "A feature is a useful visual pattern or property used for analysis."
        },
        {
          "type": "paragraph",
          "title": "Application Note 2",
          "text": "In an examination or project, connect the definition to the purpose, describe the process in the correct order, and use a concrete example to show that the concept has been understood. The exact application should remain consistent with the problem being discussed."
        },
        {
          "type": "exam",
          "title": "Board Revision 3",
          "question": "What is RGB?",
          "answer": "RGB represents colour using red, green and blue channel values."
        },
        {
          "type": "paragraph",
          "title": "Application Note 3",
          "text": "In an examination or project, connect the definition to the purpose, describe the process in the correct order, and use a concrete example to show that the concept has been understood. The exact application should remain consistent with the problem being discussed."
        },
        {
          "type": "exam",
          "title": "Board Revision 4",
          "question": "Differentiate classification and detection.",
          "answer": "Classification assigns categories; detection identifies objects and their locations."
        },
        {
          "type": "paragraph",
          "title": "Application Note 4",
          "text": "In an examination or project, connect the definition to the purpose, describe the process in the correct order, and use a concrete example to show that the concept has been understood. The exact application should remain consistent with the problem being discussed."
        },
        {
          "type": "exam",
          "title": "Board Revision 5",
          "question": "What does OpenCV provide?",
          "answer": "OpenCV provides tools for reading, processing and analysing images and video."
        },
        {
          "type": "paragraph",
          "title": "Application Note 5",
          "text": "In an examination or project, connect the definition to the purpose, describe the process in the correct order, and use a concrete example to show that the concept has been understood. The exact application should remain consistent with the problem being discussed."
        },
        {
          "type": "exam",
          "title": "Board Revision 6",
          "question": "Why are CNNs useful for images?",
          "answer": "CNNs can learn hierarchical visual features using convolutional operations."
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
          "title": "3.21 Grayscale and Colour Information",
          "text": "Grayscale simplifies an image by representing intensity without separate colour channels. This can be useful when colour is not essential to the task and can reduce the amount of information that must be processed. Colour is valuable when the distinction between objects depends on hue or channel information."
        },
        {
          "type": "keypoint",
          "title": "Key Point 1",
          "items": [
            "Grayscale simplifies an image by representing intensity without separate colour channels.",
            "Connect this idea to the relevant stage, domain or evaluation question when applying it."
          ]
        },
        {
          "type": "paragraph",
          "title": "3.22 Cropping and Resizing",
          "text": "Cropping removes portions of an image that are not relevant to the task. Resizing changes the image dimensions so that inputs have a consistent size or fit processing constraints. Both operations should preserve the information required by the intended model."
        },
        {
          "type": "keypoint",
          "title": "Key Point 2",
          "items": [
            "Cropping removes portions of an image that are not relevant to the task.",
            "Connect this idea to the relevant stage, domain or evaluation question when applying it."
          ]
        },
        {
          "type": "paragraph",
          "title": "3.23 Lighting and Background Variation",
          "text": "A model trained only on images with one lighting condition or background may struggle when the environment changes. This illustrates why training examples should represent the range of conditions expected during actual use. Data diversity can be as important as the number of examples."
        },
        {
          "type": "keypoint",
          "title": "Key Point 3",
          "items": [
            "A model trained only on images with one lighting condition or background may struggle when the environment changes.",
            "Connect this idea to the relevant stage, domain or evaluation question when applying it."
          ]
        },
        {
          "type": "paragraph",
          "title": "3.24 Classification Example",
          "text": "Suppose a school wants to classify images of recyclable and non-recyclable items. The project needs labelled examples, a consistent definition of each class, appropriate visual features and a test set representing different object shapes, backgrounds and lighting conditions. The final score should not be accepted without inspecting errors."
        },
        {
          "type": "keypoint",
          "title": "Key Point 4",
          "items": [
            "Suppose a school wants to classify images of recyclable and non-recyclable items.",
            "Connect this idea to the relevant stage, domain or evaluation question when applying it."
          ]
        },
        {
          "type": "paragraph",
          "title": "3.25 Detection Example",
          "text": "A traffic-monitoring application may need to identify vehicles and locate them within each frame. Unlike simple image classification, detection requires the system to associate predictions with positions in the image. The evaluation must therefore consider both whether objects were detected and whether their locations were estimated adequately."
        },
        {
          "type": "keypoint",
          "title": "Key Point 5",
          "items": [
            "A traffic-monitoring application may need to identify vehicles and locate them within each frame.",
            "Connect this idea to the relevant stage, domain or evaluation question when applying it."
          ]
        },
        {
          "type": "paragraph",
          "title": "3.26 OpenCV Workflow",
          "text": "A basic practical workflow can be described as importing the library, reading an image, checking its dimensions or channels, applying an operation, displaying or saving the result and interpreting what changed. Each operation should have a reason connected to the project goal."
        },
        {
          "type": "keypoint",
          "title": "Key Point 6",
          "items": [
            "A basic practical workflow can be described as importing the library, reading an image, checking its dimensions or channels, applying an operation, displaying or saving the result and interpreting what changed.",
            "Connect this idea to the relevant stage, domain or evaluation question when applying it."
          ]
        },
        {
          "type": "paragraph",
          "title": "3.27 Why Features Matter",
          "text": "Two images can contain the same object but differ in scale, orientation, lighting or background. Useful features should capture information that remains meaningful despite expected variation. Modern deep-learning approaches can learn such representations, while classical methods may use manually designed features."
        },
        {
          "type": "keypoint",
          "title": "Key Point 7",
          "items": [
            "Two images can contain the same object but differ in scale, orientation, lighting or background.",
            "Connect this idea to the relevant stage, domain or evaluation question when applying it."
          ]
        },
        {
          "type": "paragraph",
          "title": "3.28 Vision Errors",
          "text": "Computer Vision errors may occur because an object is partially hidden, the image is blurred, the class definitions overlap, the training examples are unbalanced or the environment differs from the training data. Error analysis helps determine which cause is most important."
        },
        {
          "type": "keypoint",
          "title": "Key Point 8",
          "items": [
            "Computer Vision errors may occur because an object is partially hidden, the image is blurred, the class definitions overlap, the training examples are unbalanced or the environment differs from the training data.",
            "Connect this idea to the relevant stage, domain or evaluation question when applying it."
          ]
        },
        {
          "type": "paragraph",
          "title": "3.29 Human Review of Visual AI",
          "text": "When a visual model is used in a consequential setting, a person may need to review uncertain or high-impact outputs. A confidence score is not a guarantee of correctness. Users should understand the system’s limits and have a process for correcting errors."
        },
        {
          "type": "keypoint",
          "title": "Key Point 9",
          "items": [
            "When a visual model is used in a consequential setting, a person may need to review uncertain or high-impact outputs.",
            "Connect this idea to the relevant stage, domain or evaluation question when applying it."
          ]
        }
      ]
    }
  ]
};
