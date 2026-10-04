// Class 10 Artificial Intelligence — ultra-detailed continuous chapter
const ChapterData = {
  "id": "10-artificialintelligence-natural-language-processing-nlp",
  "title": "Natural Language Processing (NLP)",
  "file": "natural-language-processing-nlp.js",
  "description": "A continuous chapter on NLP, language challenges, applications, chatbots, text processing, Bag-of-Words and practical language analysis.",
  "summary": "NLP converts human language into forms that computers can process, analyse and use for tasks such as classification, interaction and summarisation.",
  "sections": [
    {
      "title": "Natural Language Processing",
      "blocks": [
        {
          "type": "paragraph",
          "title": "4.1 Introduction to Natural Language Processing",
          "text": "Natural Language Processing is an AI domain concerned with enabling computers to process, analyse and work with human language. Human language carries meaning through words, grammar, context, tone and relationships between words. Computers, however, operate on numerical representations and formal computational procedures. NLP bridges this gap by converting language into forms that algorithms can process."
        },
        {
          "type": "paragraph",
          "title": "4.2 Why Human Language Is Difficult for Computers",
          "text": "Human language is flexible and context-dependent. The same word can have different meanings in different sentences, people can express the same idea in many ways, and spelling or grammar may vary. A short phrase may depend on information that is not explicitly stated. These properties make language processing more difficult than simply searching for exact words."
        },
        {
          "type": "exam",
          "title": "Exam Focus",
          "question": "What is Natural Language Processing?",
          "answer": "Natural Language Processing is an AI domain that enables computers to process, analyse and work with human language in forms such as text and speech."
        },
        {
          "type": "paragraph",
          "title": "4.3 Applications of NLP",
          "text": "NLP is used in chatbots, translation, speech-related systems, sentiment analysis, text classification, search, summarisation and other language applications. These systems may combine language processing with other AI domains. For example, a voice assistant can involve speech processing, NLP and data-driven decision making."
        },
        {
          "type": "data",
          "title": "4.4 NLP Applications",
          "headers": [
            "Application",
            "What the system attempts to do"
          ],
          "rows": [
            [
              "Chatbot",
              "Interact with a user using language"
            ],
            [
              "Translation",
              "Convert meaning from one language into another"
            ],
            [
              "Sentiment analysis",
              "Estimate the sentiment expressed in text"
            ],
            [
              "Summarisation",
              "Produce a shorter representation of important information"
            ],
            [
              "Text classification",
              "Assign text to categories such as spam or topic"
            ]
          ],
          "text": ""
        },
        {
          "type": "comic",
          "title": "Comic: Surya meets a chatbot",
          "dialogues": [
            {
              "character": "Surya",
              "dialogue": "A chatbot replied to my question immediately."
            },
            {
              "character": "Arushi",
              "dialogue": "But how does it understand what you typed?"
            },
            {
              "character": "Verma Sir",
              "dialogue": "It processes the language using techniques that represent and analyse words and their relationships."
            },
            {
              "character": "Surya",
              "dialogue": "So the response depends on how the language is processed, not just on matching one sentence."
            }
          ]
        },
        {
          "type": "paragraph",
          "title": "4.5 Chatbots",
          "text": "A chatbot is a software system designed to interact with users through conversational input. A simple chatbot can use predefined rules and responses. More advanced chatbots may use language models or other NLP techniques to interpret a wider variety of inputs. In every case, the system must handle ambiguity and unexpected language carefully."
        },
        {
          "type": "paragraph",
          "title": "4.6 Human Language versus Computer Language",
          "text": "Human languages such as Hindi and English are natural languages that developed through social use. Computer languages such as Python have formal syntax and precise rules designed for machines to execute. NLP works with natural language, where meaning can be flexible and context-sensitive. This is why converting natural language into computational representations is a central challenge."
        },
        {
          "type": "data",
          "title": "4.7 Language Differences",
          "headers": [
            "Property",
            "Natural language",
            "Computer language"
          ],
          "rows": [
            [
              "Syntax",
              "Can vary and contain ambiguity",
              "Defined by formal grammar"
            ],
            [
              "Meaning",
              "Depends on context and usage",
              "Usually specified precisely for execution"
            ],
            [
              "Variation",
              "Dialects, slang and informal forms",
              "Controlled vocabulary and syntax"
            ],
            [
              "Ambiguity",
              "Common",
              "Generally minimised by language rules"
            ]
          ],
          "text": ""
        },
        {
          "type": "exam",
          "title": "Exam Focus",
          "question": "Why is human language difficult for computers to process?",
          "answer": "Human language is context-dependent, flexible and often ambiguous. Words can have multiple meanings, sentences can be expressed in different ways, and meaning may depend on information outside the exact words used."
        },
        {
          "type": "paragraph",
          "title": "4.8 Text Processing Pipeline",
          "text": "Before a machine can analyse text, raw language often needs to be cleaned and transformed. The precise steps depend on the task. A typical introductory pipeline may involve collecting text, normalising it, separating it into useful units, representing those units numerically and then applying a model or analysis method. The aim is to preserve useful information while reducing irrelevant variation."
        },
        {
          "type": "paragraph",
          "title": "4.9 Text Normalisation",
          "text": "Text normalisation makes textual input more consistent. Depending on the task, this may include converting text to a common case, handling punctuation, correcting or standardising certain forms, removing unnecessary symbols and dealing with extra spaces. Normalisation should be used carefully because removing information that carries meaning can reduce model quality."
        },
        {
          "type": "paragraph",
          "title": "4.10 Tokenisation",
          "text": "Tokenisation divides text into smaller units called tokens. Tokens may be words, subwords, characters or other units depending on the method. For example, the sentence “AI helps students” can be separated into tokens such as “AI”, “helps” and “students”. Tokenisation provides a bridge between continuous text and discrete elements that can be counted or represented."
        },
        {
          "type": "paragraph",
          "title": "4.11 Stop Words and Meaning",
          "text": "Some text-processing systems remove very common words called stop words when those words are not useful for the particular task. However, there is no universal rule that every common word should be removed. Words such as “not” can be essential for sentiment or meaning. The processing pipeline should therefore be chosen according to the purpose of the analysis."
        },
        {
          "type": "paragraph",
          "title": "4.12 Stemming and Lemmatization",
          "text": "Stemming reduces words to a simpler stem using rules that may produce a form that is not a dictionary word. Lemmatization aims to reduce a word to its meaningful base or dictionary form using more linguistic information. These techniques can reduce variation between related word forms, but the appropriate choice depends on the application."
        },
        {
          "type": "data",
          "title": "4.13 Processing Example",
          "headers": [
            "Original text",
            "Possible processed representation"
          ],
          "rows": [
            [
              "“Students are learning AI.”",
              "students / learning / ai"
            ],
            [
              "“Students learned AI.”",
              "students / learned / ai"
            ],
            [
              "Purpose",
              "Reduce or organise variation before analysis"
            ]
          ],
          "text": "The exact output depends on the processing choices and tools used."
        },
        {
          "type": "exam",
          "title": "Long Answer",
          "question": "What is text normalisation?",
          "answer": "Text normalisation is the process of converting textual data into a more consistent form for analysis. Depending on the task, it may involve case conversion, punctuation handling, standardisation and other cleaning operations."
        },
        {
          "type": "practice",
          "title": "Apply the idea",
          "question": "Why should a text-processing pipeline be designed for the task instead of applying every possible cleaning step?",
          "answer": "Because some transformations can remove information that is meaningful for the task. Processing should improve consistency without destroying useful linguistic information."
        },
        {
          "type": "paragraph",
          "title": "4.14 Bag of Words",
          "text": "The Bag-of-Words approach represents a document using the words that occur in a chosen vocabulary and their counts or presence. It ignores word order in its basic form. For example, if the vocabulary contains “AI”, “school” and “learn”, a document can be represented by how many times each word appears. This simple representation is useful for introducing numerical text features, although it loses some contextual information."
        },
        {
          "type": "data",
          "title": "4.15 Bag-of-Words Example",
          "headers": [
            "Document",
            "AI",
            "school",
            "learn"
          ],
          "rows": [
            [
              "D1: AI helps school",
              "1",
              "1",
              "0"
            ],
            [
              "D2: students learn AI",
              "1",
              "0",
              "1"
            ]
          ],
          "text": "Each document becomes a numerical vector based on the selected vocabulary."
        },
        {
          "type": "paragraph",
          "title": "4.16 Why Bag-of-Words Is Useful",
          "text": "Machine-learning algorithms need numerical inputs. Bag-of-Words converts text into a structured numerical representation that can be used for classification or other analysis. Its simplicity makes it easy to understand, but it treats words largely as independent counts and therefore cannot fully capture word order or deeper context."
        },
        {
          "type": "paragraph",
          "title": "4.17 TF-IDF as Enrichment",
          "text": "TF-IDF is a term-weighting technique that gives higher importance to terms that are frequent in a particular document but relatively uncommon across a collection of documents. It combines term frequency with inverse document frequency. It can help identify words that distinguish one document from another. Where the curriculum marks this topic as optional, it should be treated as enrichment rather than a core assessed requirement."
        },
        {
          "type": "paragraph",
          "title": "4.18 NLTK and Practical Text Processing",
          "text": "NLTK is a Python toolkit used for working with human language data and teaching or experimenting with NLP techniques. In practical learning, such a toolkit can support tokenisation, text processing and other introductory tasks. The important concept is not memorising every library function but understanding the flow from raw text to processed representation and analysis."
        },
        {
          "type": "comic",
          "title": "Comic: From sentence to numbers",
          "dialogues": [
            {
              "character": "Prince",
              "dialogue": "The sentence is readable to me, but the computer needs a representation it can calculate with."
            },
            {
              "character": "Surya",
              "dialogue": "We can tokenise the text and build a numerical representation such as Bag-of-Words."
            },
            {
              "character": "Sharma Sir",
              "dialogue": "Correct. The representation becomes input for later analysis or modelling."
            },
            {
              "character": "Prince",
              "dialogue": "So text processing connects language to computation."
            }
          ]
        },
        {
          "type": "paragraph",
          "title": "4.19 Revisiting the AI Project Cycle in NLP",
          "text": "An NLP project still follows the AI Project Cycle. The team first scopes the language problem, acquires representative text, explores and cleans it, selects a suitable representation and model, and evaluates the output. If a sentiment classifier performs poorly on informal language, the team may need better examples or revised preprocessing rather than simply choosing a more complex model."
        },
        {
          "type": "data",
          "title": "4.20 NLP Project Example",
          "headers": [
            "Stage",
            "Illustration"
          ],
          "rows": [
            [
              "Problem Scoping",
              "Classify student feedback into broad sentiment categories"
            ],
            [
              "Data Acquisition",
              "Collect appropriately permitted feedback text"
            ],
            [
              "Data Exploration",
              "Inspect language, labels, length and missing information"
            ],
            [
              "Modelling",
              "Convert text to features and train a classifier"
            ],
            [
              "Evaluation",
              "Measure predictions on suitable unseen examples"
            ]
          ],
          "text": ""
        },
        {
          "type": "paragraph",
          "title": "4.21 Responsible NLP",
          "text": "Language systems can reproduce bias in their data, misunderstand dialects, mishandle sensitive text or produce misleading outputs. Privacy is especially important when text contains names, contact details, health information or private opinions. A responsible NLP project limits data collection to a legitimate purpose, protects information and evaluates performance across relevant language varieties and user groups."
        },
        {
          "type": "exam",
          "title": "Long Answer",
          "question": "Explain the role of Bag-of-Words in NLP.",
          "answer": "Bag-of-Words converts text into numerical features based on the occurrence or frequency of words in a vocabulary. It allows algorithms to work with text as structured numerical data, although the basic method does not preserve word order or full contextual meaning."
        },
        {
          "type": "exam",
          "title": "Final Revision",
          "question": "List the major topics in introductory NLP.",
          "answer": "The major topics include the meaning and applications of NLP, chatbots, differences between human and computer language, text processing, text normalisation, tokenisation, Bag-of-Words, optional TF-IDF enrichment, NLTK-based practical work and responsible NLP projects."
        }
      ]
    },
    {
      "title": "Extended Board-Style Revision and Application",
      "blocks": [
        {
          "type": "exam",
          "title": "Board Revision 1",
          "question": "Define NLP.",
          "answer": "NLP is the AI domain concerned with processing and analysing human language."
        },
        {
          "type": "paragraph",
          "title": "Application Note 1",
          "text": "In an examination or project, connect the definition to the purpose, describe the process in the correct order, and use a concrete example to show that the concept has been understood. The exact application should remain consistent with the problem being discussed."
        },
        {
          "type": "exam",
          "title": "Board Revision 2",
          "question": "Why is natural language ambiguous?",
          "answer": "Natural language depends on context and can contain ambiguity and variation."
        },
        {
          "type": "paragraph",
          "title": "Application Note 2",
          "text": "In an examination or project, connect the definition to the purpose, describe the process in the correct order, and use a concrete example to show that the concept has been understood. The exact application should remain consistent with the problem being discussed."
        },
        {
          "type": "exam",
          "title": "Board Revision 3",
          "question": "What is tokenisation?",
          "answer": "Tokenisation divides text into units such as words or subwords."
        },
        {
          "type": "paragraph",
          "title": "Application Note 3",
          "text": "In an examination or project, connect the definition to the purpose, describe the process in the correct order, and use a concrete example to show that the concept has been understood. The exact application should remain consistent with the problem being discussed."
        },
        {
          "type": "exam",
          "title": "Board Revision 4",
          "question": "What is Bag-of-Words?",
          "answer": "Bag-of-Words represents text numerically using a vocabulary and word counts or presence."
        },
        {
          "type": "paragraph",
          "title": "Application Note 4",
          "text": "In an examination or project, connect the definition to the purpose, describe the process in the correct order, and use a concrete example to show that the concept has been understood. The exact application should remain consistent with the problem being discussed."
        },
        {
          "type": "exam",
          "title": "Board Revision 5",
          "question": "What is text normalisation?",
          "answer": "Text normalisation makes input more consistent for analysis."
        },
        {
          "type": "paragraph",
          "title": "Application Note 5",
          "text": "In an examination or project, connect the definition to the purpose, describe the process in the correct order, and use a concrete example to show that the concept has been understood. The exact application should remain consistent with the problem being discussed."
        },
        {
          "type": "exam",
          "title": "Board Revision 6",
          "question": "Give three NLP applications.",
          "answer": "Chatbots, translation and sentiment analysis are examples."
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
          "title": "4.22 Words, Context and Ambiguity",
          "text": "A word can change meaning according to context. For example, “bank” can refer to a financial institution or the side of a river. A language system therefore needs more than a dictionary lookup to interpret many sentences. Context, surrounding words and the purpose of the interaction all influence meaning."
        },
        {
          "type": "keypoint",
          "title": "Key Point 1",
          "items": [
            "A word can change meaning according to context.",
            "Connect this idea to the relevant stage, domain or evaluation question when applying it."
          ]
        },
        {
          "type": "paragraph",
          "title": "4.23 Spelling and Informal Language",
          "text": "Online text may contain abbreviations, spelling variations, emojis, repeated letters and mixed languages. A robust NLP project should understand the characteristics of its intended input. Over-cleaning informal text can remove information that is useful for sentiment or intent classification."
        },
        {
          "type": "keypoint",
          "title": "Key Point 2",
          "items": [
            "Online text may contain abbreviations, spelling variations, emojis, repeated letters and mixed languages.",
            "Connect this idea to the relevant stage, domain or evaluation question when applying it."
          ]
        },
        {
          "type": "paragraph",
          "title": "4.24 Sentiment Analysis",
          "text": "Sentiment analysis attempts to identify the expressed attitude or sentiment in text, often using categories such as positive, negative or neutral. The labels must be defined clearly, and the training examples should represent the language and context of the intended users. Sarcasm and mixed emotions can make the task difficult."
        },
        {
          "type": "keypoint",
          "title": "Key Point 3",
          "items": [
            "Sentiment analysis attempts to identify the expressed attitude or sentiment in text, often using categories such as positive, negative or neutral.",
            "Connect this idea to the relevant stage, domain or evaluation question when applying it."
          ]
        },
        {
          "type": "paragraph",
          "title": "4.25 Automatic Summarisation",
          "text": "Summarisation reduces a longer text into a shorter representation while attempting to preserve important information. A useful evaluation should consider whether key facts are retained and whether the summary introduces unsupported information. Shorter does not automatically mean better."
        },
        {
          "type": "keypoint",
          "title": "Key Point 4",
          "items": [
            "Summarisation reduces a longer text into a shorter representation while attempting to preserve important information.",
            "Connect this idea to the relevant stage, domain or evaluation question when applying it."
          ]
        },
        {
          "type": "paragraph",
          "title": "4.26 Translation",
          "text": "Machine translation attempts to produce text in another language while preserving meaning. Differences in grammar, word order, cultural references and multiple meanings make translation challenging. Evaluation should consider the purpose of the translation and the consequences of errors."
        },
        {
          "type": "keypoint",
          "title": "Key Point 5",
          "items": [
            "Machine translation attempts to produce text in another language while preserving meaning.",
            "Connect this idea to the relevant stage, domain or evaluation question when applying it."
          ]
        },
        {
          "type": "paragraph",
          "title": "4.27 Text Classification",
          "text": "Text classification assigns documents or messages to predefined categories. Examples include topic classification and spam detection. The quality of labels matters because the model learns from the examples provided to it."
        },
        {
          "type": "keypoint",
          "title": "Key Point 6",
          "items": [
            "Text classification assigns documents or messages to predefined categories.",
            "Connect this idea to the relevant stage, domain or evaluation question when applying it."
          ]
        },
        {
          "type": "paragraph",
          "title": "4.28 Vocabulary and Vectors",
          "text": "A vocabulary is a defined collection of textual units used by a representation method. A document can be converted into a numerical vector according to the vocabulary. This allows mathematical algorithms to compare or classify text, even though the original input was linguistic."
        },
        {
          "type": "keypoint",
          "title": "Key Point 7",
          "items": [
            "A vocabulary is a defined collection of textual units used by a representation method.",
            "Connect this idea to the relevant stage, domain or evaluation question when applying it."
          ]
        },
        {
          "type": "paragraph",
          "title": "4.29 Limits of Bag-of-Words",
          "text": "Bag-of-Words is easy to understand but loses word order and much contextual information. For example, two sentences containing the same words in different arrangements may receive similar representations. This limitation motivates more advanced representations, while the simple method remains valuable for learning the basic connection between text and numerical data."
        },
        {
          "type": "keypoint",
          "title": "Key Point 8",
          "items": [
            "Bag-of-Words is easy to understand but loses word order and much contextual information.",
            "Connect this idea to the relevant stage, domain or evaluation question when applying it."
          ]
        },
        {
          "type": "paragraph",
          "title": "4.30 NLP Evaluation Must Match the Task",
          "text": "A language system should be evaluated according to what it is designed to do. A classifier can be evaluated using classification metrics, while a conversational system may require measures of relevance, safety and successful task completion. The evaluation data should represent real input conditions."
        },
        {
          "type": "keypoint",
          "title": "Key Point 9",
          "items": [
            "A language system should be evaluated according to what it is designed to do.",
            "Connect this idea to the relevant stage, domain or evaluation question when applying it."
          ]
        }
      ]
    }
  ]
};
