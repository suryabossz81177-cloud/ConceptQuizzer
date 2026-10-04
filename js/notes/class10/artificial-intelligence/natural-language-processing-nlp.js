// Class 10 Artificial Intelligence — expanded information-only chapter
const ChapterData = {
  "id": "10-artificialintelligence-natural-language-processing-nlp",
  "title": "Natural Language Processing (NLP)",
  "file": "natural-language-processing-nlp.js",
  "description": "A continuous chapter on NLP, language challenges, applications, chatbots, text processing, Bag-of-Words and practical language analysis. Expanded substantially with additional topic-by-topic explanatory content only; question, practice and unrelated revision blocks are not included.",
  "summary": "NLP converts human language into forms that computers can process, analyse and use for tasks such as classification, interaction and summarisation. The expanded version develops the concepts, processes, representations, applications, limitations and responsible-use considerations in continuous detail.",
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
    },
    {
      "title": "Expanded Topic-by-Topic Chapter Content",
      "blocks": [
        {
          "type": "paragraph",
          "title": "4.1 What Natural Language Processing Does",
          "text": "Natural Language Processing is the area of AI concerned with processing and generating human language. It connects computational methods with written or spoken language so that systems can classify text, extract information, translate, answer questions, summarise, search documents or conduct conversations."
        },
        {
          "type": "paragraph",
          "title": "4.2 Why Human Language Is Difficult",
          "text": "Human language contains ambiguity, context, idioms, incomplete sentences, spelling variation, sarcasm, multiple meanings and references to information outside the sentence itself. The same word can have different meanings in different contexts. An NLP system therefore needs representations that capture more than simple character matching."
        },
        {
          "type": "paragraph",
          "title": "4.3 Language Levels",
          "text": "Language can be studied at several levels. Words and their forms belong to morphology, sentence structure relates to syntax, literal meaning relates to semantics, and meaning influenced by context relates to pragmatics. NLP systems may use information from several levels depending on the task."
        },
        {
          "type": "paragraph",
          "title": "4.4 Text as Data",
          "text": "Before a computer can analyse text, the text must be represented in a machine-processable form. Characters can be converted into tokens or other numerical representations. The choice of representation influences what relationships a model can learn and how efficiently it can process large collections of language data."
        },
        {
          "type": "paragraph",
          "title": "4.5 Tokenisation",
          "text": "Tokenisation divides text into smaller units called tokens. Depending on the system, tokens may correspond to words, subwords, characters or other pieces of text. Tokenisation is important because subsequent algorithms operate on these units rather than on an undivided paragraph."
        },
        {
          "type": "paragraph",
          "title": "4.6 Normalisation of Text",
          "text": "Text normalisation can include consistent casing, handling punctuation, standardising forms and correcting selected variations when appropriate. The correct procedure depends on the task. Removing information indiscriminately can damage meaning, especially when punctuation, capitalisation or word forms carry useful information."
        },
        {
          "type": "paragraph",
          "title": "4.7 Stop Words",
          "text": "Some NLP workflows remove very frequent words that contribute little to a particular task. These are often called stop words. However, removal is not universally beneficial. Words such as “not” can be important for sentiment or meaning, so preprocessing must be designed for the intended application rather than applied mechanically."
        },
        {
          "type": "paragraph",
          "title": "4.8 Stemming and Lemmatization",
          "text": "Stemming reduces related words by applying a simpler rule-based reduction, while lemmatisation attempts to map a word to an appropriate dictionary base form using linguistic information. The two approaches can produce different results. The choice depends on whether computational simplicity or linguistic precision is more important for the task."
        },
        {
          "type": "paragraph",
          "title": "4.9 Bag of Words",
          "text": "The Bag-of-Words model represents a document according to the occurrence of words, usually ignoring word order. A vocabulary is built from the corpus and each document is represented using numerical counts or indicators. This simple representation can support classification and other tasks, but it cannot directly capture the full meaning created by word order and context."
        },
        {
          "type": "paragraph",
          "title": "4.10 Term Frequency",
          "text": "Term frequency measures how often a term occurs in a document according to the chosen definition. It provides a simple indication of which words are prominent within that document. Raw frequency can overemphasise words that appear often in many documents, which motivates weighting methods such as TF-IDF."
        },
        {
          "type": "paragraph",
          "title": "4.11 TF-IDF",
          "text": "TF-IDF combines term frequency with inverse document frequency. A term that is frequent in one document but uncommon across the larger collection receives greater importance than a term that appears in almost every document. This can help identify words that distinguish documents in a collection."
        },
        {
          "type": "paragraph",
          "title": "4.12 Word Embeddings",
          "text": "Word embeddings represent words as numerical vectors in a continuous space. Words that occur in similar linguistic contexts can receive representations that are relatively close according to the learned space. Embeddings provide richer information than simple word counts because they can encode relationships learned from large text collections."
        },
        {
          "type": "paragraph",
          "title": "4.13 Contextual Representations",
          "text": "A word can have different meanings in different sentences. Contextual language models therefore produce representations that depend on surrounding text. This allows the same surface word to be represented differently when its context changes, improving performance on tasks where meaning depends strongly on neighbouring words."
        },
        {
          "type": "paragraph",
          "title": "4.14 Text Classification",
          "text": "Text classification assigns documents or messages to predefined categories. Examples include spam detection, topic classification, sentiment classification and routing customer requests. A model learns relationships between text representations and labelled categories, then applies those learned patterns to new text."
        },
        {
          "type": "paragraph",
          "title": "4.15 Sentiment Analysis",
          "text": "Sentiment analysis estimates the expressed attitude or polarity in text, such as positive, negative or neutral sentiment. The task can be difficult because sentiment may depend on context, irony, domain-specific vocabulary and the target of the opinion. A simple word-count method may miss these relationships."
        },
        {
          "type": "paragraph",
          "title": "4.16 Named Entity Recognition",
          "text": "Named Entity Recognition identifies spans of text that refer to entities such as people, organisations, locations, dates or other predefined categories. It can support information extraction and search. The categories must be defined for the application, and the model must learn how context affects the identity of an entity mention."
        },
        {
          "type": "paragraph",
          "title": "4.17 Information Extraction",
          "text": "Information extraction converts unstructured text into structured information. A system may identify entities, relationships, events, dates or other facts. The goal is not merely to recognise words but to organise selected information into a form that another program can use."
        },
        {
          "type": "paragraph",
          "title": "4.18 Machine Translation",
          "text": "Machine translation converts text from one language into another using computational models. Translation requires more than replacing individual words because word order, grammar, idioms and context differ between languages. Modern systems learn relationships from large collections of parallel or multilingual text."
        },
        {
          "type": "paragraph",
          "title": "4.19 Speech and Language",
          "text": "Spoken-language systems often combine speech recognition with NLP. Speech recognition converts an audio signal into text or another linguistic representation, while NLP interprets the resulting language and decides how to respond. Text-to-speech systems perform the reverse direction by generating spoken audio from language."
        },
        {
          "type": "paragraph",
          "title": "4.20 Chatbots",
          "text": "A chatbot is a system designed to interact with users through conversational input and output. A modern chatbot may combine language understanding, dialogue management, retrieval or generation, external tools and safety controls. A fluent response does not automatically mean the system has verified the factual correctness of its content."
        },
        {
          "type": "paragraph",
          "title": "4.21 Question Answering",
          "text": "Question-answering systems attempt to produce answers to questions using a source of information, a learned model or both. Some systems retrieve relevant passages and then extract or generate an answer. Reliability depends on the quality of the information source, language understanding and the method used to produce the final response."
        },
        {
          "type": "paragraph",
          "title": "4.22 Text Summarisation",
          "text": "Summarisation produces a shorter representation of a longer text while attempting to preserve important information. Extractive methods select material from the original text, while abstractive methods generate new wording. A summary should preserve essential meaning and avoid introducing information that was not supported by the source."
        },
        {
          "type": "paragraph",
          "title": "4.23 Search and Information Retrieval",
          "text": "Information retrieval systems locate relevant documents or passages for a query. They can use word matching, weighted representations, embeddings or combinations of these methods. Relevance depends on both the user’s information need and the system’s ability to represent relationships between the query and available content."
        },
        {
          "type": "paragraph",
          "title": "4.24 NLP Data and Annotation",
          "text": "Supervised NLP systems require labelled examples appropriate to the task. Annotation can identify sentiment, entities, categories, translation pairs or other targets. Clear annotation guidelines are important because inconsistent labels can limit what the model can learn."
        },
        {
          "type": "paragraph",
          "title": "4.25 Ambiguity in NLP",
          "text": "Lexical ambiguity occurs when a word has multiple possible meanings. Syntactic ambiguity occurs when a sentence can have more than one structural interpretation. Pragmatic ambiguity arises when the intended meaning depends on context or shared knowledge. Handling ambiguity is one reason NLP requires contextual processing."
        },
        {
          "type": "paragraph",
          "title": "4.26 NLP and Bias",
          "text": "Language data reflects the people, institutions and cultures that produced it. If training data contains stereotypes or unequal representation, an NLP model can reproduce or amplify those patterns. Evaluation should therefore examine performance across relevant groups and contexts, not only average performance on a single dataset."
        },
        {
          "type": "paragraph",
          "title": "4.27 Privacy in Language Systems",
          "text": "Language data can contain names, addresses, opinions, messages, medical information and other sensitive details. NLP projects should control access, protect stored data and avoid unnecessary collection. When conversational systems process personal information, privacy and security become part of the system design rather than separate concerns."
        },
        {
          "type": "paragraph",
          "title": "4.28 Hallucination and Reliability",
          "text": "A generative language system may produce fluent text that is unsupported, incomplete or incorrect. This can happen because language generation is based on learned patterns rather than a guarantee that every statement has been verified against reality. Applications that require high factual reliability should use appropriate sources, retrieval, validation or human review."
        },
        {
          "type": "paragraph",
          "title": "4.29 NLP Pipeline",
          "text": "A general NLP pipeline can involve collecting language data, cleaning or normalising it, tokenising it, creating a numerical representation, training or applying a model, evaluating the output and presenting the result. Not every application uses every step, and modern end-to-end models can combine several operations internally."
        },
        {
          "type": "paragraph",
          "title": "4.30 Responsible NLP",
          "text": "Responsible NLP requires attention to accuracy, fairness, privacy, transparency, cultural and linguistic diversity, security and appropriate human oversight. A language system should be evaluated for the actual contexts in which people will use it, especially when its outputs influence decisions or access to important services."
        },
        {
          "type": "paragraph",
          "title": "4.31 Word Order and Meaning",
          "text": "Word order can change the meaning of a sentence even when the same words are present. “The dog chased the cat” and “The cat chased the dog” contain the same basic words but assign different roles. This is one reason a simple bag-of-words representation cannot fully represent sentence meaning."
        },
        {
          "type": "paragraph",
          "title": "4.32 N-grams",
          "text": "An n-gram is a sequence of n consecutive tokens or words. Unigrams contain one item, bigrams contain two and trigrams contain three. N-grams capture some local word-order information while remaining simpler than many deep contextual models."
        },
        {
          "type": "paragraph",
          "title": "4.33 Vocabulary Size",
          "text": "The vocabulary of an NLP system is the set of tokens it can represent under its chosen tokenisation method. A very large vocabulary can increase memory and computation, while an overly small vocabulary may lose useful distinctions. Subword tokenisation can balance these concerns by representing uncommon words through smaller pieces."
        },
        {
          "type": "paragraph",
          "title": "4.34 Out-of-Vocabulary Words",
          "text": "An out-of-vocabulary problem occurs when an input contains a form that the system cannot represent using its fixed vocabulary. This can happen with names, spelling variations, new words or technical terms. Subword and character-level representations can reduce this problem."
        },
        {
          "type": "paragraph",
          "title": "4.35 Language Models",
          "text": "A language model estimates relationships between sequences of language tokens. It can assign scores to possible continuations or generate text according to learned patterns. Language models are used in applications such as autocomplete, translation, summarisation and conversational systems."
        },
        {
          "type": "paragraph",
          "title": "4.36 Context Windows",
          "text": "Language models process a particular amount of surrounding context according to their architecture and configuration. Context allows the system to relate words and ideas that occur near each other or within the available input. Longer context can provide more information but can also increase computational requirements."
        },
        {
          "type": "paragraph",
          "title": "4.37 Attention",
          "text": "Attention mechanisms allow a model to weigh the relevance of different parts of an input when processing a particular token or output. This helps models represent relationships between words that may be separated by many other words. Attention is a major component of modern transformer-based language systems."
        },
        {
          "type": "paragraph",
          "title": "4.38 Transformers",
          "text": "Transformer architectures use attention-based processing to model relationships among tokens efficiently. They have become important for many NLP tasks because they can learn rich contextual representations from large datasets. Different transformer models can be adapted for understanding, generation or specialised tasks."
        },
        {
          "type": "paragraph",
          "title": "4.39 Text Generation",
          "text": "Text generation produces a sequence of tokens according to learned language patterns and a generation procedure. The output can vary depending on the model and decoding settings. Fluent generation should not be confused with guaranteed factual accuracy because the system’s objective is language generation rather than automatic verification of every claim."
        },
        {
          "type": "paragraph",
          "title": "4.40 Retrieval and Generation",
          "text": "A language system can retrieve relevant information from a collection and then use that information to help construct an answer. Retrieval provides a connection to a specific information source, while generation turns representations into natural-language output. Combining them can improve grounding when the retrieval source is reliable and the system uses it correctly."
        },
        {
          "type": "paragraph",
          "title": "4.41 Dialogue Context",
          "text": "Conversational systems need to maintain enough context to interpret follow-up statements. Pronouns, references and omitted information often depend on earlier turns. Dialogue management determines which context is relevant and how the system should respond while respecting safety and privacy requirements."
        },
        {
          "type": "paragraph",
          "title": "4.42 Multilingual NLP",
          "text": "Languages differ in vocabulary, grammar, writing systems and available training resources. A model may perform strongly in one language and less reliably in another, especially when high-quality training data is scarce. Multilingual evaluation should therefore examine each important language rather than assuming equal performance."
        },
        {
          "type": "paragraph",
          "title": "4.43 Speech Recognition Errors",
          "text": "Speech recognition can be affected by accent, background noise, microphone quality, speaking rate and vocabulary. Errors in speech-to-text can propagate into later NLP stages, so evaluating the complete pipeline is important when a system depends on accurate spoken input."
        },
        {
          "type": "paragraph",
          "title": "4.44 Text Classification Features",
          "text": "Text classification can use word counts, TF-IDF, embeddings or contextual representations. The representation influences what information the classifier can use. A representation that ignores word order may be adequate for some topic tasks but inadequate for tasks where syntax or context is essential."
        },
        {
          "type": "paragraph",
          "title": "4.45 NLP Evaluation",
          "text": "NLP systems require metrics appropriate to the task. Classification can use accuracy, precision, recall and F1. Generation tasks may require multiple automatic measures plus human evaluation because grammatical fluency, relevance, factuality and usefulness are not captured completely by a single score."
        }
      ]
    }
  ]
};
