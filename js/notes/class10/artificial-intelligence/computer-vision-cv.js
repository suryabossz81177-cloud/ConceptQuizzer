// Class 10 Artificial Intelligence — expanded information-only chapter
const ChapterData = {
  "id": "10-artificialintelligence-computer-vision-cv",
  "title": "Computer Vision (CV)",
  "file": "computer-vision-cv.js",
  "description": "A continuous chapter on visual data, pixels, features, image processing, OpenCV, RGB images, convolution and CNN concepts. Expanded substantially with additional topic-by-topic explanatory content only; question, practice and unrelated revision blocks are not included.",
  "summary": "Computer Vision processes visual information by representing images numerically and learning or extracting patterns for useful tasks. The expanded version develops the concepts, processes, representations, applications, limitations and responsible-use considerations in continuous detail.",
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
          "type": "paragraph",
          "title": "3.20 Summary of Computer Vision",
          "text": "Computer Vision begins with visual data, represents it numerically as pixels, prepares the data, identifies or learns useful patterns and produces an output for the intended task. Basic image processing and tools such as OpenCV provide practical foundations. More advanced methods such as convolution and CNNs show how models can learn hierarchical visual representations. Throughout the process, data quality and responsible use remain essential."
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
    },
    {
      "title": "Expanded Topic-by-Topic Chapter Content",
      "blocks": [
        {
          "type": "paragraph",
          "title": "3.1 What Computer Vision Means",
          "text": "Computer Vision is the field of AI concerned with enabling computers to obtain useful information from images and other visual data. The computer does not see an image in the human biological sense; it receives numerical representations and applies algorithms or learned models to identify patterns, objects, structures or events."
        },
        {
          "type": "paragraph",
          "title": "3.2 Digital Images as Data",
          "text": "A digital image is represented using a grid of picture elements called pixels. Each pixel stores numerical information describing the visual signal at that location. The number of pixels determines spatial resolution, while the number of bits used to represent a value affects how many intensity or colour levels can be stored."
        },
        {
          "type": "paragraph",
          "title": "3.3 Grayscale Images",
          "text": "A grayscale image represents intensity rather than separate colour channels. In a common 8-bit representation, each pixel can store a value from 0 to 255, where values near one end represent darker intensity and values near the other represent lighter intensity. Grayscale images can simplify tasks when colour is not necessary."
        },
        {
          "type": "paragraph",
          "title": "3.4 RGB Colour Images",
          "text": "An RGB image represents colour using three channels: red, green and blue. A pixel can therefore be represented by three numerical values, one for each channel. Combining different intensities of these channels allows a large range of colours to be represented. RGB is a representation format, not a statement about how human vision itself works."
        },
        {
          "type": "paragraph",
          "title": "3.5 Resolution",
          "text": "Image resolution describes the number of pixels used to represent an image, often expressed as width by height. Higher resolution can preserve more visual detail, but it also increases the amount of data that must be stored and processed. The appropriate resolution depends on the visual task and available computational resources."
        },
        {
          "type": "paragraph",
          "title": "3.6 Channels and Image Shape",
          "text": "A grayscale image can be represented as a two-dimensional array of intensity values. An RGB image can be represented as a two-dimensional spatial grid with three values associated with each pixel. Other image formats can contain additional channels, such as an alpha channel representing transparency."
        },
        {
          "type": "paragraph",
          "title": "3.7 Image Classification",
          "text": "Image classification assigns an input image to one or more predefined categories. A model may learn visual patterns associated with each category from labelled examples. The output is a prediction, so the system must be evaluated to determine how reliably it distinguishes the intended classes."
        },
        {
          "type": "paragraph",
          "title": "3.8 Object Detection",
          "text": "Object detection identifies instances of objects and usually estimates their locations within an image using bounding regions. Unlike simple classification, detection must answer both what objects are present and where they occur. Multiple objects of different categories can be detected in the same image."
        },
        {
          "type": "paragraph",
          "title": "3.9 Image Segmentation",
          "text": "Segmentation assigns labels at the pixel or region level. Semantic segmentation can classify each pixel according to a category, while instance segmentation can distinguish separate objects belonging to the same category. Segmentation is useful when precise object boundaries matter."
        },
        {
          "type": "paragraph",
          "title": "3.10 Image Recognition and Features",
          "text": "Visual recognition depends on patterns such as edges, shapes, textures, colours and spatial relationships. Traditional computer-vision pipelines often extracted engineered features explicitly. Modern deep-learning systems can learn useful representations automatically from training data, although the underlying visual information remains encoded numerically."
        },
        {
          "type": "paragraph",
          "title": "3.11 Image Preprocessing",
          "text": "Preprocessing prepares images for later analysis. It can include resizing, normalising numerical ranges, reducing unwanted noise, adjusting contrast or converting representations. Preprocessing should be chosen according to the task because unnecessary transformations can remove information that the model needs."
        },
        {
          "type": "paragraph",
          "title": "3.12 Noise in Images",
          "text": "Noise is unwanted variation or distortion in visual data. It can arise from sensors, lighting, compression, transmission or environmental conditions. A vision system may need to distinguish meaningful visual patterns from such disturbances. Cleaning methods should preserve important edges and structures rather than simply making an image look smoother."
        },
        {
          "type": "paragraph",
          "title": "3.13 Convolution as a Visual Operation",
          "text": "Convolution applies a small numerical filter across different locations of an image. The filter combines nearby pixel values to produce a new value, allowing local patterns such as edges or textures to be detected. Repeating this operation across the image creates a feature map that represents where the learned or chosen pattern appears strongly."
        },
        {
          "type": "paragraph",
          "title": "3.14 Convolutional Neural Networks",
          "text": "A Convolutional Neural Network, or CNN, is a neural-network architecture widely associated with image processing. Convolutional layers learn local patterns, while later layers can combine these patterns into more complex representations. Pooling or other downsampling operations may reduce spatial size and help create more compact representations."
        },
        {
          "type": "paragraph",
          "title": "3.15 Hierarchical Visual Features",
          "text": "Visual information can be represented hierarchically. Early processing may respond to simple structures such as edges or local contrasts. Deeper layers can combine these into shapes, object parts and increasingly complex patterns. This hierarchy helps a CNN learn useful representations directly from image data."
        },
        {
          "type": "paragraph",
          "title": "3.16 Training Visual Models",
          "text": "A supervised vision model is trained using images paired with target labels or annotations. The model produces predictions, compares them with the expected targets through a loss function and adjusts parameters through optimisation. The process is repeated across many examples so the model can learn useful visual relationships."
        },
        {
          "type": "paragraph",
          "title": "3.17 Data Augmentation",
          "text": "Data augmentation creates varied training examples from existing images through transformations such as cropping, rotation, flipping or controlled changes in scale and brightness. The transformations should preserve the meaning of the label. Augmentation can help a model become less dependent on accidental details in the training images."
        },
        {
          "type": "paragraph",
          "title": "3.18 Transfer Learning",
          "text": "Transfer learning uses representations learned from one visual task or dataset as a starting point for another related task. Instead of learning every visual feature from the beginning, a new model can adapt useful existing representations. This can be valuable when the new dataset is smaller than the datasets normally required for training a large vision model."
        },
        {
          "type": "paragraph",
          "title": "3.19 Face Detection and Recognition",
          "text": "Face detection identifies regions that appear to contain faces, while face recognition attempts to determine identity or match a face with a known representation. These are different tasks. Systems involving faces require careful attention to consent, privacy, bias, security and the consequences of incorrect identification."
        },
        {
          "type": "paragraph",
          "title": "3.20 Optical Character Recognition",
          "text": "Optical Character Recognition, or OCR, converts visual representations of written or printed characters into machine-readable text. OCR involves locating text, analysing character shapes and producing a sequence of symbols. Performance can be affected by font, image quality, lighting, layout and language."
        },
        {
          "type": "paragraph",
          "title": "3.21 Medical Image Analysis",
          "text": "Computer vision can assist with medical image analysis by identifying patterns in scans or other clinical images. Such systems require carefully curated datasets and rigorous validation because errors can have serious consequences. A model’s performance in a research dataset does not by itself establish clinical suitability."
        },
        {
          "type": "paragraph",
          "title": "3.22 Autonomous Systems",
          "text": "Vehicles, robots and other autonomous systems can use cameras and vision models to perceive their surroundings. Visual information may help detect lanes, signs, obstacles, pedestrians or objects. Real-world systems generally combine computer vision with other sensors and decision-making components because no single visual input provides complete information about the environment."
        },
        {
          "type": "paragraph",
          "title": "3.23 Limitations of Computer Vision",
          "text": "Vision systems can fail when lighting, viewpoint, scale, background, weather or object appearance differs substantially from training examples. They may also be sensitive to small changes that humans would ignore. These limitations make representative data, testing conditions and uncertainty assessment important parts of a responsible vision system."
        },
        {
          "type": "paragraph",
          "title": "3.24 Bias in Visual Datasets",
          "text": "A visual dataset can be biased if some people, environments, object types or conditions are underrepresented. A model may then perform well on common examples but poorly on less represented cases. Dataset diversity should be considered when collecting images, defining labels and evaluating the final system."
        },
        {
          "type": "paragraph",
          "title": "3.25 Computer Vision Pipeline",
          "text": "A typical vision pipeline can include image acquisition, storage, preprocessing, feature or representation learning, model inference and interpretation of the output. The exact steps depend on the application. For example, a classification system may end with a category prediction, while a detection system also returns locations."
        },
        {
          "type": "paragraph",
          "title": "3.26 Colour Information and Task Choice",
          "text": "Colour can provide useful information for some vision tasks but can be irrelevant or misleading for others. A system detecting a shape may benefit little from colour, while identifying ripe fruit may depend strongly on colour patterns. The representation should therefore be selected according to the information required by the task."
        },
        {
          "type": "paragraph",
          "title": "3.27 Visual Data Storage and Computation",
          "text": "Large images and video contain substantial numbers of numerical values. Increasing resolution, frame rate or colour information increases computational requirements. Efficient processing may involve resizing, compression, sampling or specialised hardware, but these choices can create a trade-off between computational cost and preserved visual detail."
        },
        {
          "type": "paragraph",
          "title": "3.28 Video and Temporal Information",
          "text": "A video is a sequence of images captured over time. Computer vision applied to video can use both the appearance of individual frames and changes between frames. This enables tasks such as action recognition, object tracking and movement analysis, where time is an additional dimension of information."
        },
        {
          "type": "paragraph",
          "title": "3.29 Human Vision and Computer Vision",
          "text": "Human vision is a biological system involving eyes, neural processing, attention, memory and context. Computer vision uses sensors, numerical representations, algorithms and learned models. A computer may outperform people on a narrowly defined recognition task while lacking the broad contextual understanding and adaptability of human perception."
        },
        {
          "type": "paragraph",
          "title": "3.30 Responsible Computer Vision",
          "text": "A responsible computer-vision system should have a clear purpose, appropriate data, suitable evaluation, protection for sensitive information and safeguards against harmful misuse. Accuracy alone is not sufficient when visual data concerns people or sensitive environments. Deployment decisions should consider both technical limitations and social consequences."
        },
        {
          "type": "paragraph",
          "title": "3.31 Image Classification vs Detection",
          "text": "Classification answers which category an image belongs to, while detection identifies objects and their locations. A photograph containing several vehicles may be classified broadly as a traffic scene, but an object detector can locate individual cars, buses and motorcycles. The choice depends on the information required by the application."
        },
        {
          "type": "paragraph",
          "title": "3.32 Semantic and Instance Segmentation",
          "text": "Semantic segmentation assigns a category to each pixel, so all pixels belonging to the same category share a label. Instance segmentation goes further by distinguishing separate objects even when they belong to the same category. This difference is important in scenes containing multiple objects of the same type."
        },
        {
          "type": "paragraph",
          "title": "3.33 Bounding Boxes",
          "text": "A bounding box is a rectangular region used to indicate the approximate location of an object in an image. Object-detection datasets commonly store a class label together with coordinates describing the box. The quality of these annotations affects the ability of a model to learn accurate locations."
        },
        {
          "type": "paragraph",
          "title": "3.34 Annotation in Vision Datasets",
          "text": "Vision datasets can contain image-level labels, bounding boxes, masks, keypoints or other annotations. The annotation type must match the task. Creating detailed annotations can require substantial human effort, and inconsistent annotation standards can introduce noise into the training data."
        },
        {
          "type": "paragraph",
          "title": "3.35 Image Resolution and Detail",
          "text": "Fine details require sufficient spatial resolution. If an object occupies only a few pixels, distinguishing its shape or texture may be difficult. Increasing resolution can preserve detail but increases storage and computation. The appropriate resolution is therefore a trade-off based on the smallest important visual features."
        },
        {
          "type": "paragraph",
          "title": "3.36 Lighting and Appearance",
          "text": "The same object can appear different under sunlight, artificial light, shadows, reflections or low-light conditions. A robust vision model should encounter representative variations during development. Otherwise it may learn accidental relationships between an object and a particular lighting condition."
        },
        {
          "type": "paragraph",
          "title": "3.37 Occlusion",
          "text": "Occlusion occurs when one object partly blocks another. This makes recognition more difficult because only part of the object is visible. Training data containing realistic occlusion can help a model learn which partial patterns are sufficient for recognition."
        },
        {
          "type": "paragraph",
          "title": "3.38 Viewpoint and Scale",
          "text": "An object can appear different when viewed from different angles or distances. A model trained mostly on front-facing objects may perform poorly on unusual viewpoints. Similarly, objects at very different scales may require representations that can handle changes in size."
        },
        {
          "type": "paragraph",
          "title": "3.39 Image Classification Scores",
          "text": "A classifier may produce scores for several possible categories. The selected class can be the category with the highest score according to the model’s decision rule. These scores should not automatically be interpreted as perfectly calibrated probabilities unless calibration has been established."
        },
        {
          "type": "paragraph",
          "title": "3.40 Precision in Object Detection",
          "text": "Object detection can be evaluated by comparing predicted object regions with ground-truth regions. Measures of overlap, commonly based on intersection over union, help determine whether a predicted location sufficiently matches the true object region. Detection evaluation therefore considers both category correctness and localisation quality."
        },
        {
          "type": "paragraph",
          "title": "3.41 Intersection over Union",
          "text": "Intersection over Union, or IoU, compares the area shared by a predicted region and a ground-truth region with the total area covered by their union. A larger IoU indicates stronger overlap. It is widely used when evaluating bounding-box or segmentation predictions."
        },
        {
          "type": "paragraph",
          "title": "3.42 Video Object Tracking",
          "text": "Object tracking follows an identified object across successive video frames. Unlike detecting objects independently in each frame, tracking uses temporal continuity to associate observations of the same object over time. This supports applications such as traffic analysis and movement monitoring."
        },
        {
          "type": "paragraph",
          "title": "3.43 Visual Similarity",
          "text": "Visual similarity measures attempt to determine how alike two images or visual representations are according to a chosen representation or distance. Similarity can support image search, duplicate detection or matching tasks. The meaning of “similar” depends on the application and the representation used."
        },
        {
          "type": "paragraph",
          "title": "3.44 Edge Detection",
          "text": "Edges often occur where image intensity changes sharply. Edge-detection operations can highlight these boundaries and make structural information easier to analyse. Edges can be useful for detecting shapes, contours and object boundaries, although they are only one type of visual information."
        },
        {
          "type": "paragraph",
          "title": "3.45 Computer Vision in Document Processing",
          "text": "Vision systems can analyse scanned documents to detect pages, layouts, tables, forms and text. OCR can then convert recognised characters into searchable text. Document-processing pipelines often combine multiple vision and language techniques rather than relying on a single model."
        }
      ]
    }
  ]
};
