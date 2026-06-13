'use client';
import { useState } from 'react';
import Link from 'next/link';
import './lessons.css';

const lessons = [
  { id:1, num:'01', title:'What is BIM? A Complete Introduction',       desc:'Understand the core concept of BIM, its history, and why it transformed the construction industry.', cat:'beginner',     topic:'general',     locked:false },
  { id:2, num:'02', title:'BIM vs CAD: Key Differences Explained',       desc:'Learn why BIM is not just 3D CAD and how the shift in workflow changes everything.',                   cat:'beginner',     topic:'general',     locked:false },
  { id:3, num:'03', title:'Getting Started with Autodesk Revit',          desc:'Your first steps inside Revit — interface overview, project setup, and understanding families.',        cat:'beginner',     topic:'revit',       locked:false },
  { id:4, num:'04', title:'Understanding LOD: Level of Development',      desc:'What LOD 100 to LOD 500 means, when to use each level, and how it affects project delivery.',          cat:'beginner',     topic:'standards',   locked:true  },
  { id:5, num:'05', title:'BIM Execution Plan (BEP) Fundamentals',        desc:'How to read and write a BIM Execution Plan — the document that governs every BIM project.',            cat:'beginner',     topic:'standards',   locked:true  },
  { id:6, num:'06', title:'Revit Families: System, Loadable & In-Place',  desc:'Deep dive into the three family types in Revit, when to use each, and best practices.',               cat:'intermediate', topic:'revit',       locked:true  },
  { id:7, num:'07', title:'Clash Detection with Navisworks',               desc:'Step-by-step guide to running clash detection, interpreting results, and coordinating with the team.',  cat:'intermediate', topic:'navisworks',  locked:true  },
  { id:8, num:'08', title:'MEP Coordination in BIM Projects',              desc:'How mechanical, electrical, and plumbing models are coordinated using BIM.',                            cat:'intermediate', topic:'coordination',locked:true  },
  { id:9, num:'09', title:'IFC: Open BIM Standard Explained',              desc:'What IFC is, why it matters for interoperability, and how to export and import IFC files correctly.',   cat:'intermediate', topic:'ifc',         locked:true  },
  { id:10,num:'10', title:'BIM 360 for Project Collaboration',             desc:'Using Autodesk BIM 360 to manage documents, coordinate models, and track issues across the team.',     cat:'intermediate', topic:'bim360',      locked:true  },
  { id:11,num:'11', title:'4D BIM: Linking Schedule to the Model',         desc:'How to connect your Revit model to a project schedule and simulate construction sequencing.',           cat:'advanced',     topic:'coordination',locked:true  },
  { id:12,num:'12', title:'BIM in the Philippines: Standards & Opportunities',desc:'BIM adoption in PH construction, government mandates, and career opportunities.',                   cat:'advanced',     topic:'general',     locked:true  },
];

const topicLabel = { revit:'Revit', standards:'BIM Standards', coordination:'Coordination', navisworks:'Navisworks', bim360:'BIM 360', ifc:'IFC', general:'General BIM' };

export default function LessonsPage() {
  const [activeCat,   setActiveCat]   = useState('all');
  const [activeTopic, setActiveTopic] = useState('all');
  const [search,      setSearch]      = useState('');

  const filtered = lessons.filter(l => {
    const matchCat   = activeCat   === 'all' || l.cat   === activeCat;
    const matchTopic = activeTopic === 'all' || l.topic === activeTopic;
    const matchSearch = l.title.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchTopic && matchSearch;
  });

  return (
    <main className="lessons-page">

      <div className="lessons-header">
        <div className="page-label">Knowledge Library</div>
        <h1 className="page-title">BIM Lessons</h1>
        <p className="page-sub">Browse all lessons. Subscribe to unlock full content.</p>
      </div>

      {/* CATEGORY + SEARCH */}
      <div className="filter-bar">
        <div className="filter-group">
          {['all','beginner','intermediate','advanced'].map(cat => (
            <button
              key={cat}
              className={`filter-btn cat-${cat} ${activeCat === cat ? 'active' : ''}`}
              onClick={() => setActiveCat(cat)}
            >
              {cat === 'all' ? 'All Levels' : cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
        <input
          type="text"
          placeholder="Search lessons..."
          className="search-input"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      {/* TOPIC TABS */}
      <div className="topic-tabs">
        {['all','revit','standards','coordination','navisworks','bim360','ifc','general'].map(topic => (
          <button
            key={topic}
            className={`topic-tab ${activeTopic === topic ? 'active' : ''}`}
            onClick={() => setActiveTopic(topic)}
          >
            {topic === 'all' ? 'All Topics' : topicLabel[topic]}
          </button>
        ))}
      </div>

      {/* STATS */}
      <div className="stats-row">
        <span className="stat-chip"><strong>{filtered.length}</strong> lessons</span>
        <span className="dot" />
        <span className="stat-chip"><strong>3</strong> free previews</span>
        <span className="dot" />
        <span className="stat-chip">Updated <strong>June 2026</strong></span>
      </div>

      {/* GRID */}
      {filtered.length === 0 ? (
        <div className="empty-state">
          <p>🔍</p>
          <span>No lessons match your filters. Try a different combination.</span>
        </div>
      ) : (
        <div className="lessons-grid">
          {filtered.map(lesson => (
            <div key={lesson.id} className={`lesson-card ${lesson.locked ? 'locked' : ''}`}>
              <div className="card-top">
                <div className="card-tags">
                  <span className={`tag-topic tag-${lesson.topic}`}>{topicLabel[lesson.topic]}</span>
                  <span className={`cat-badge cat-${lesson.cat}`}>{lesson.cat}</span>
                  {!lesson.locked && <span className="free-badge">FREE</span>}
                </div>
                <div className="card-num">Lesson {lesson.num}</div>
                <h3 className="card-title">{lesson.title}</h3>
                {!lesson.locked && <p className="card-desc">{lesson.desc}</p>}
              </div>

              {lesson.locked ? (
                <div className="card-locked-body">
                  <span className="lock-icon">🔒</span>
                  <span className="lock-text">
                    Subscribe to unlock — <Link href="/pricing">View Plans</Link>
                  </span>
                </div>
              ) : (
                <div className="card-footer">
                  <Link href={`/lessons/${lesson.id}`} className="read-more">Read lesson →</Link>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </main>
  );
}