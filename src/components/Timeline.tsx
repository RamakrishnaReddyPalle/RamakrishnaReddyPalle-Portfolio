import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Personal History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">NLP Research Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">IIT Roorkee, India</h4>
            <p>
              NLP Research Intern under Dr. Raksha Sharma at IIT Roorkee, working on bias detection in fake news, exploring linguistic cues, semantic patterns, and transformer-based architectures to build interpretable models capable of identifying political or ideological bias in misinformation
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2024 - 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">AI Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">FTCS, Bhubaneswar</h4>
            <p>
              Part-time AI Engineer at FTCS, contributing to production-ready CV and NLP solutions including a hybrid FER model, an LLM-powered Resume–JD Matcher, an ATS-optimized Resume Builder, and REST API development for the company’s AI-driven recruitment platform
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Summer Internship</h3>
            <h4 className="vertical-timeline-element-subtitle">FTCS, Bhubaneswar</h4>
            <p>
              AI Engineer Intern at Flasho-Tech Consultancy Services, where I developed an end-to-end AI-assisted bidding pipeline for industrial floorplan tenders and led the research & development of a custom object detection model designed to challenge state-of-the-art detectors in small object recognition tasks
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Research Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">IIT Bhubaneswar, India</h4>
            <p>
              Completed a Research Internship under Dr. Himanshu Padole at IIT Bhubaneswar, where I worked on deep learning for ASR-free keyword spotting using the Keyword Transformer model, diving into audio preprocessing, contrastive learning, and robust representation learning in low-resource speech environments
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2021 - 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Enginering Undergraduate</h3>
            <h4 className="vertical-timeline-element-subtitle">IIT Bhubaneswar, India</h4>
            <p>
              Pursued my B.Tech in Electrical Engineering at IIT Bhubaneswar, where I dove deep into core EE subjects while exploring my passion for AI, ML, and intelligent systems, all while actively engaging in student communities, music, photography and football, making it a truly transformative and multidisciplinary journey
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2021"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Senior Secondary Education</h3>
            <h4 className="vertical-timeline-element-subtitle">Hyderabad, India</h4>
            <p>
              Scored 95% in Telangana State Board (MPC), with competitive ranks of open category AIR 5664 (JEE Advanced), 10681 (JEE Mains), and 2048 (TS EAMCET)
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2008-2018"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Senior Secondary Education</h3>
            <h4 className="vertical-timeline-element-subtitle">Hyderabad, India</h4>
            <p>
              Spent a decade at GMR Chinmaya Vidyalaya, Hyderabad, where I grew as the School Pupil Leader, embraced discipline and values, and topped the school in 10th grade with 92.4%
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;