import React from "react";
import mock01 from '../assets/images/project1.png';
import mock02 from '../assets/images/project2.png';
import mock03 from '../assets/images/project3.png';
import mock04 from '../assets/images/project4.png';
import mock05 from '../assets/images/project5.png';
import mock06 from '../assets/images/project6.png';
import mock07 from '../assets/images/project7.png';
import mock08 from '../assets/images/project8.png';
import mock09 from '../assets/images/project9.png';
import mock10 from '../assets/images/project10.png';
import mock11 from '../assets/images/project11.png';
import mock12 from '../assets/images/project12.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/RamakrishnaReddyPalle/diagram-intel" target="_blank" rel="noreferrer"><img src={mock12} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/RamakrishnaReddyPalle/diagram-intel" target="_blank" rel="noreferrer"><h2>Diagram Intel</h2></a>
                <p>A bottom-up pipeline that turns an electrical wiring PDF into a clean, queryable, self-correcting graph using CV and VLMs, so a chatbot can answer fault-finding questions like an on-site engineer.</p>
            </div>
            <div className="project">
                <a href="https://github.com/RamakrishnaReddyPalle/valura-financial-agent-ram" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/RamakrishnaReddyPalle/valura-financial-agent-ram" target="_blank" rel="noreferrer"><h2>Financial Planning Agent</h2></a>
                <p>An interactive AI-powered chatbot that guides users through personalized financial planning, including retirement strategies, savings goals, future value estimations, and more</p>
            </div>
            <div className="project">
                <a href="https://github.com/RamakrishnaReddyPalle/large-pdf-agent" target="_blank" rel="noreferrer"><img src={mock11} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/RamakrishnaReddyPalle/large-pdf-agent" target="_blank" rel="noreferrer"><h2>Title-17 Copilot</h2></a>
                <p>A focused large PDF assistant. Embeddings + SFT data gen, LoRA tuned Qwen2.5-1.5B, BM25 + CE reranker retrieval, multi-LLM agent via Ollama, streaming answers with citations and a Gradio chat UI.</p>
            </div>
            <div className="project">
                <a href="https://github.com/RamakrishnaReddyPalle/conversationsal-db-agent" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/RamakrishnaReddyPalle/conversationsal-db-agent" target="_blank" rel="noreferrer"><h2>Conversational DB Agent</h2></a>
                <p>Built a natural language interface for MongoDB querying and then back, using FastAPI, LangChain, and LLaMA 3.2 with memory-augmented conversations</p>
            </div>
            <div className="project">
                <a href="https://github.com/RamakrishnaReddyPalle/nba-engine" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/RamakrishnaReddyPalle/nba-engine" target="_blank" rel="noreferrer"><h2>NBA Engine</h2></a>
                <p>Developed a multi-stage, LLM-powered Next-Best-Action (NBA) engine using FastAPI, SQLite, BERTopic, VADER, custom classifiers, LangChain, and LLaMA 3.2</p>
            </div>
            <div className="project">
                <a href="https://github.com/RamakrishnaReddyPalle/Resume-Match-Maker-Using-OpenAI-API" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/RamakrishnaReddyPalle/Resume-Match-Maker-Using-OpenAI-API" target="_blank" rel="noreferrer"><h2>Resume - JD Match Maker</h2></a>
                <p>Built an LLM-NLP pipeline using GPT for parsing, SBERT-E5 for embedding, cosine similarity for matching, and a Transformer-based RL model to optimize match scoring.</p>
            </div>
            <div className="project">
                <a href="https://github.com/RamakrishnaReddyPalle/AAB-test-app.git" target="_blank" rel="noreferrer"><img src={mock06} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/RamakrishnaReddyPalle/AAB-test-app.git" target="_blank" rel="noreferrer"><h2>FloorSight</h2></a>
                <p>Built a legend detection system for power system floorplans by fine-tuning YOLOv8 on 71 object classes with custom tiling augmentation and loss functions, deployed via Streamlit on EC2 with S3 storage</p>
            </div>
            <div className="project">
                <a href="https://github.com/RamakrishnaReddyPalle/FER-RAM" target="_blank" rel="noreferrer"><img src={mock05} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/RamakrishnaReddyPalle/FER-RAM" target="_blank" rel="noreferrer"><h2>Hybrid FER</h2></a>
                <p>Trained on EXPW dataset with bicubic upscaling and augmentations; extracted facial landmarks via MediaPipe and built a hybrid model combining image and landmark features for emotion classification.</p>
            </div>
            <div className="project">
                <a href="https://github.com/RamakrishnaReddyPalle/Multi-Speaker-STT" target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/RamakrishnaReddyPalle/Multi-Speaker-STT" target="_blank" rel="noreferrer"><h2>Echo-Split</h2></a>
                <p>Building this as an open-source pipeline to turn noisy, multi-speaker meeting audio into clean, speaker-attributed transcripts, so AI agents can make better contextual decisions from real conversations.</p>
            </div>
            <div className="project">
                <a href="https://github.com/RamakrishnaReddyPalle/asr_app_ram" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/RamakrishnaReddyPalle/asr_app_ram" target="_blank" rel="noreferrer"><h2>Hindi ASR Pipeline</h2></a>
                <p>I optimized NVIDIA NeMo’s Conformer model for Hindi speech recognition using ONNX, testing a search space of graph optimizers, and built a FastAPI backend for fast, production-ready inference.</p>
            </div>
            <div className="project">
                <a href="https://github.com/RamakrishnaReddyPalle/Keyword-Transformer-Model-ASR-Free-KWS" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/RamakrishnaReddyPalle/Keyword-Transformer-Model-ASR-Free-KWS" target="_blank" rel="noreferrer"><h2>ASR-Free Keyword Transformer</h2></a>
                <p>I experimented with Keyword Transformer model for ASR-free keyword spotting on the Google Speech Commands v2 dataset, testing its robustness in noisy settings for low-resource, real-time applications.</p>
            </div>
            <div className="project">
                <a href="https://github.com/RamakrishnaReddyPalle/Distribution-Systems-Fault-Location-Classification" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/RamakrishnaReddyPalle/Distribution-Systems-Fault-Location-Classification" target="_blank" rel="noreferrer"><h2>Power System Fault Identification</h2></a>
                <p>I simulated 12 fault types on the IEEE 13 Node Test Feeder using Simulink, transformed signals into wavelet images for TF analysis, and built a hybrid CNN+RNN model to classify and locate faults effectively.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;
