import React from "react";
import { useState } from "react";

const login = () => {
  const collegeData = {
    Haryana: {
      colleges: {
        GJU: {
          courses: {
            BTech: {
              branches: {
                CSE: {
                  sections: {
                    A: ["DSA", "DBMS", "OS", "CN", "React"],
                    B: ["Node", "MongoDB", "SQL", "Java", "Python"],
                    C: ["AI", "ML", "Cloud", "DevOps", "Testing"],
                  },
                },
                IT: {
                  sections: {
                    A: ["HTML", "CSS", "JS", "React", "Node"],
                    B: ["Java", "Spring", "SQL", "MongoDB", "Express"],
                    C: ["DSA", "OS", "CN", "AWS", "Docker"],
                  },
                },
                Mechanical: {
                  sections: {
                    A: ["Thermo", "CAD", "Fluid", "Machine", "Design"],
                    B: ["Robotics", "AutoCAD", "Welding", "CNC", "Tool"],
                    C: ["Heat", "Strength", "Production", "Workshop", "Viva"],
                  },
                },
              },
            },
            MBA: {
              branches: {
                Finance: {
                  sections: {
                    A: ["Accounts", "Tax", "Audit", "Investment", "Economics"],
                    B: ["Banking", "Budget", "Payroll", "GST", "Excel"],
                    C: ["Business", "Risk", "Market", "Funds", "Research"],
                  },
                },
                Marketing: {
                  sections: {
                    A: ["SEO", "Ads", "Branding", "Sales", "Digital"],
                    B: ["Market", "CRM", "Lead", "Email", "Campaign"],
                    C: ["Growth", "Social", "Content", "Analytics", "PR"],
                  },
                },
                HR: {
                  sections: {
                    A: ["Hiring", "Payroll", "Policy", "Training", "Law"],
                    B: ["Onboarding", "Attendance", "Leave", "Review", "KPI"],
                    C: ["Culture", "Benefits", "Engagement", "Exit", "Docs"],
                  },
                },
              },
            },
            BCA: {
              branches: {
                Computer: {
                  sections: {
                    A: ["C", "C++", "Java", "DBMS", "HTML"],
                    B: ["CSS", "JS", "React", "Node", "MongoDB"],
                    C: ["DSA", "OS", "CN", "Python", "Project"],
                  },
                },
                AI: {
                  sections: {
                    A: ["Python", "ML", "DL", "NLP", "Vision"],
                    B: ["TensorFlow", "Pandas", "NumPy", "Stats", "Model"],
                    C: ["GenAI", "LLM", "Prompt", "RAG", "Agents"],
                  },
                },
                DataScience: {
                  sections: {
                    A: ["Python", "Pandas", "SQL", "PowerBI", "Excel"],
                    B: ["ML", "Stats", "EDA", "Cleaning", "Model"],
                    C: ["Dashboard", "Viz", "NLP", "BigData", "Project"],
                  },
                },
              },
            },
          },
        },

        MDU: {
          courses: {
            BTech: {
              branches: {
                CSE: {
                  sections: {
                    A: ["Java", "React", "Node", "MongoDB", "Redis"],
                    B: ["Express", "SQL", "AWS", "Docker", "CI/CD"],
                    C: ["Microservices", "Kafka", "System Design", "DSA", "OS"],
                  },
                },
                IT: {
                  sections: {
                    A: ["Web", "API", "Cloud", "Security", "Linux"],
                    B: ["Python", "Django", "FastAPI", "Postgres", "Redis"],
                    C: ["K8s", "DevOps", "Jenkins", "Git", "Project"],
                  },
                },
                Mechanical: {
                  sections: {
                    A: ["Machine", "Workshop", "CAD", "CAM", "Design"],
                    B: ["Engine", "Hydraulic", "Fluid", "Thermo", "CNC"],
                    C: ["Robotics", "Tool", "Heat", "Material", "Project"],
                  },
                },
              },
            },
            MBA: {
              branches: {
                Finance: {
                  sections: {
                    A: ["Budget", "Tax", "Audit", "Accounts", "Funds"],
                    B: ["Stock", "Equity", "Risk", "Research", "Excel"],
                    C: ["Banking", "Loans", "Insurance", "Portfolio", "GST"],
                  },
                },
                Marketing: {
                  sections: {
                    A: ["Brand", "SEO", "SEM", "Sales", "Lead"],
                    B: ["Campaign", "CRM", "Social", "Email", "Analytics"],
                    C: ["Growth", "PR", "Market", "Research", "Strategy"],
                  },
                },
                HR: {
                  sections: {
                    A: ["Recruitment", "Payroll", "Training", "Review", "KPI"],
                    B: ["Policy", "Attendance", "Leave", "Law", "Benefits"],
                    C: ["Culture", "Engagement", "Exit", "Survey", "Docs"],
                  },
                },
              },
            },
            BCA: {
              branches: {
                Computer: {
                  sections: {
                    A: ["C", "Java", "HTML", "CSS", "JS"],
                    B: ["React", "Node", "SQL", "MongoDB", "Express"],
                    C: ["DSA", "Python", "OS", "CN", "Mini Project"],
                  },
                },
                AI: {
                  sections: {
                    A: ["ML", "DL", "NLP", "Vision", "Python"],
                    B: ["Stats", "Model", "TensorFlow", "Pandas", "NumPy"],
                    C: ["Prompt", "LLM", "Agents", "RAG", "Project"],
                  },
                },
                DataScience: {
                  sections: {
                    A: ["Python", "SQL", "Pandas", "Excel", "PowerBI"],
                    B: ["EDA", "ML", "Viz", "Dashboard", "BigData"],
                    C: ["NLP", "Forecast", "Cleaning", "Model", "Project"],
                  },
                },
              },
            },
          },
        },
      },
    },

    Rajasthan: {
      colleges: {
        JECRC: {
          courses: {
            BTech: {
              branches: {
                CSE: {
                  sections: {
                    A: ["DSA", "DBMS", "OS", "CN", "React"],
                    B: ["Node", "MongoDB", "SQL", "Java", "Python"],
                    C: ["AI", "ML", "Cloud", "DevOps", "Testing"],
                  },
                },
                IT: {
                  sections: {
                    A: ["HTML", "CSS", "JS", "React", "Node"],
                    B: ["Java", "Spring", "SQL", "MongoDB", "Express"],
                    C: ["DSA", "OS", "CN", "AWS", "Docker"],
                  },
                },
                Mechanical: {
                  sections: {
                    A: ["Thermo", "CAD", "Fluid", "Machine", "Design"],
                    B: ["Robotics", "AutoCAD", "Welding", "CNC", "Tool"],
                    C: ["Heat", "Strength", "Production", "Workshop", "Viva"],
                  },
                },
              },
            },
            MBA: {
              branches: {
                Finance: {
                  sections: {
                    A: ["Accounts", "Tax", "Audit", "Investment", "Economics"],
                    B: ["Banking", "Budget", "Payroll", "GST", "Excel"],
                    C: ["Business", "Risk", "Market", "Funds", "Research"],
                  },
                },
                Marketing: {
                  sections: {
                    A: ["SEO", "Ads", "Branding", "Sales", "Digital"],
                    B: ["Market", "CRM", "Lead", "Email", "Campaign"],
                    C: ["Growth", "Social", "Content", "Analytics", "PR"],
                  },
                },
                HR: {
                  sections: {
                    A: ["Hiring", "Payroll", "Policy", "Training", "Law"],
                    B: ["Onboarding", "Attendance", "Leave", "Review", "KPI"],
                    C: ["Culture", "Benefits", "Engagement", "Exit", "Docs"],
                  },
                },
              },
            },
            BCA: {
              branches: {
                Computer: {
                  sections: {
                    A: ["C", "C++", "Java", "DBMS", "HTML"],
                    B: ["CSS", "JS", "React", "Node", "MongoDB"],
                    C: ["DSA", "OS", "CN", "Python", "Project"],
                  },
                },
                AI: {
                  sections: {
                    A: ["Python", "ML", "DL", "NLP", "Vision"],
                    B: ["TensorFlow", "Pandas", "NumPy", "Stats", "Model"],
                    C: ["GenAI", "LLM", "Prompt", "RAG", "Agents"],
                  },
                },
                DataScience: {
                  sections: {
                    A: ["Python", "Pandas", "SQL", "PowerBI", "Excel"],
                    B: ["ML", "Stats", "EDA", "Cleaning", "Model"],
                    C: ["Dashboard", "Viz", "NLP", "BigData", "Project"],
                  },
                },
              },
            },
          },
        },

        RTU: {
          courses: {
            BTech: {
              branches: {
                CSE: {
                  sections: {
                    A: ["Java", "React", "Node", "MongoDB", "Redis"],
                    B: ["Express", "SQL", "AWS", "Docker", "CI/CD"],
                    C: ["Microservices", "Kafka", "System Design", "DSA", "OS"],
                  },
                },
                IT: {
                  sections: {
                    A: ["Web", "API", "Cloud", "Security", "Linux"],
                    B: ["Python", "Django", "FastAPI", "Postgres", "Redis"],
                    C: ["K8s", "DevOps", "Jenkins", "Git", "Project"],
                  },
                },
                Mechanical: {
                  sections: {
                    A: ["Machine", "Workshop", "CAD", "CAM", "Design"],
                    B: ["Engine", "Hydraulic", "Fluid", "Thermo", "CNC"],
                    C: ["Robotics", "Tool", "Heat", "Material", "Project"],
                  },
                },
              },
            },
            MBA: {
              branches: {
                Finance: {
                  sections: {
                    A: ["Budget", "Tax", "Audit", "Accounts", "Funds"],
                    B: ["Stock", "Equity", "Risk", "Research", "Excel"],
                    C: ["Banking", "Loans", "Insurance", "Portfolio", "GST"],
                  },
                },
                Marketing: {
                  sections: {
                    A: ["Brand", "SEO", "SEM", "Sales", "Lead"],
                    B: ["Campaign", "CRM", "Social", "Email", "Analytics"],
                    C: ["Growth", "PR", "Market", "Research", "Strategy"],
                  },
                },
                HR: {
                  sections: {
                    A: ["Recruitment", "Payroll", "Training", "Review", "KPI"],
                    B: ["Policy", "Attendance", "Leave", "Law", "Benefits"],
                    C: ["Culture", "Engagement", "Exit", "Survey", "Docs"],
                  },
                },
              },
            },
            BCA: {
              branches: {
                Computer: {
                  sections: {
                    A: ["C", "Java", "HTML", "CSS", "JS"],
                    B: ["React", "Node", "SQL", "MongoDB", "Express"],
                    C: ["DSA", "Python", "OS", "CN", "Mini Project"],
                  },
                },
                AI: {
                  sections: {
                    A: ["ML", "DL", "NLP", "Vision", "Python"],
                    B: ["Stats", "Model", "TensorFlow", "Pandas", "NumPy"],
                    C: ["Prompt", "LLM", "Agents", "RAG", "Project"],
                  },
                },
                DataScience: {
                  sections: {
                    A: ["Python", "SQL", "Pandas", "Excel", "PowerBI"],
                    B: ["EDA", "ML", "Viz", "Dashboard", "BigData"],
                    C: ["NLP", "Forecast", "Cleaning", "Model", "Project"],
                  },
                },
              },
            },
          },
        },

        Poornima: {
          courses: {
            BTech: {
              branches: {
                CSE: {
                  sections: {
                    A: ["DSA", "DBMS", "OS", "CN", "React"],
                    B: ["Node", "MongoDB", "SQL", "Java", "Python"],
                    C: ["AI", "ML", "Cloud", "DevOps", "Testing"],
                  },
                },
                IT: {
                  sections: {
                    A: ["HTML", "CSS", "JS", "React", "Node"],
                    B: ["Java", "Spring", "SQL", "MongoDB", "Express"],
                    C: ["DSA", "OS", "CN", "AWS", "Docker"],
                  },
                },
                Mechanical: {
                  sections: {
                    A: ["Thermo", "CAD", "Fluid", "Machine", "Design"],
                    B: ["Robotics", "AutoCAD", "Welding", "CNC", "Tool"],
                    C: ["Heat", "Strength", "Production", "Workshop", "Viva"],
                  },
                },
              },
            },
            MBA: {
              branches: {
                Finance: {
                  sections: {
                    A: ["Accounts", "Tax", "Audit", "Investment", "Economics"],
                    B: ["Banking", "Budget", "Payroll", "GST", "Excel"],
                    C: ["Business", "Risk", "Market", "Funds", "Research"],
                  },
                },
                Marketing: {
                  sections: {
                    A: ["SEO", "Ads", "Branding", "Sales", "Digital"],
                    B: ["Market", "CRM", "Lead", "Email", "Campaign"],
                    C: ["Growth", "Social", "Content", "Analytics", "PR"],
                  },
                },
                HR: {
                  sections: {
                    A: ["Hiring", "Payroll", "Policy", "Training", "Law"],
                    B: ["Onboarding", "Attendance", "Leave", "Review", "KPI"],
                    C: ["Culture", "Benefits", "Engagement", "Exit", "Docs"],
                  },
                },
              },
            },
            BCA: {
              branches: {
                Computer: {
                  sections: {
                    A: ["C", "C++", "Java", "DBMS", "HTML"],
                    B: ["CSS", "JS", "React", "Node", "MongoDB"],
                    C: ["DSA", "OS", "CN", "Python", "Project"],
                  },
                },
                AI: {
                  sections: {
                    A: ["Python", "ML", "DL", "NLP", "Vision"],
                    B: ["TensorFlow", "Pandas", "NumPy", "Stats", "Model"],
                    C: ["GenAI", "LLM", "Prompt", "RAG", "Agents"],
                  },
                },
                DataScience: {
                  sections: {
                    A: ["Python", "Pandas", "SQL", "PowerBI", "Excel"],
                    B: ["ML", "Stats", "EDA", "Cleaning", "Model"],
                    C: ["Dashboard", "Viz", "NLP", "BigData", "Project"],
                  },
                },
              },
            },
          },
        },

        Banasthali: {
          courses: {
            BTech: {
              branches: {
                CSE: {
                  sections: {
                    A: ["Java", "React", "Node", "MongoDB", "Redis"],
                    B: ["Express", "SQL", "AWS", "Docker", "CI/CD"],
                    C: ["Microservices", "Kafka", "System Design", "DSA", "OS"],
                  },
                },
                IT: {
                  sections: {
                    A: ["Web", "API", "Cloud", "Security", "Linux"],
                    B: ["Python", "Django", "FastAPI", "Postgres", "Redis"],
                    C: ["K8s", "DevOps", "Jenkins", "Git", "Project"],
                  },
                },
                Mechanical: {
                  sections: {
                    A: ["Machine", "Workshop", "CAD", "CAM", "Design"],
                    B: ["Engine", "Hydraulic", "Fluid", "Thermo", "CNC"],
                    C: ["Robotics", "Tool", "Heat", "Material", "Project"],
                  },
                },
              },
            },
            MBA: {
              branches: {
                Finance: {
                  sections: {
                    A: ["Budget", "Tax", "Audit", "Accounts", "Funds"],
                    B: ["Stock", "Equity", "Risk", "Research", "Excel"],
                    C: ["Banking", "Loans", "Insurance", "Portfolio", "GST"],
                  },
                },
                Marketing: {
                  sections: {
                    A: ["Brand", "SEO", "SEM", "Sales", "Lead"],
                    B: ["Campaign", "CRM", "Social", "Email", "Analytics"],
                    C: ["Growth", "PR", "Market", "Research", "Strategy"],
                  },
                },
                HR: {
                  sections: {
                    A: ["Recruitment", "Payroll", "Training", "Review", "KPI"],
                    B: ["Policy", "Attendance", "Leave", "Law", "Benefits"],
                    C: ["Culture", "Engagement", "Exit", "Survey", "Docs"],
                  },
                },
              },
            },
            BCA: {
              branches: {
                Computer: {
                  sections: {
                    A: ["C", "Java", "HTML", "CSS", "JS"],
                    B: ["React", "Node", "SQL", "MongoDB", "Express"],
                    C: ["DSA", "Python", "OS", "CN", "Mini Project"],
                  },
                },
                AI: {
                  sections: {
                    A: ["ML", "DL", "NLP", "Vision", "Python"],
                    B: ["Stats", "Model", "TensorFlow", "Pandas", "NumPy"],
                    C: ["Prompt", "LLM", "Agents", "RAG", "Project"],
                  },
                },
                DataScience: {
                  sections: {
                    A: ["Python", "SQL", "Pandas", "Excel", "PowerBI"],
                    B: ["EDA", "ML", "Viz", "Dashboard", "BigData"],
                    C: ["NLP", "Forecast", "Cleaning", "Model", "Project"],
                  },
                },
              },
            },
          },
        },
      },
    },
  };

  const [state, setState] = useState("");
  const [college, setCollege] = useState("");
  const [course, setCourse] = useState("");
  const [branch, setBranch] = useState("");
  const [section, setSection] = useState("");
  const [syallubus, setSyallubus] = useState("");

  return (
    <>
      <main>
        <select
          value={state}
          onChange={(e) => {
            setState(e.target.value);
            setCollege("");
            setCourse("");
            setBranch("");
            setSection("");
            setSyallubus("");
          }}
        >
          <option value="">Select State</option>
          {Object.keys(collegeData).map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>

        <select
          value={college}
          onChange={(e) => {
            setCollege(e.target.value);
            setCourse("");
            setBranch("");
            setSection("");
            setSyallubus("");
          }}
        >
          <option value="">Select College</option>
          {state &&
            Object.keys(collegeData[state].colleges).map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
        </select>

        <select
          value={course}
          onChange={(e) => {
            setCourse(e.target.value);
            setBranch("");
            setSection("");
            setSyallubus("");
          }}
        >
          <option value="">Select Course</option>
          {state &&
            college &&
            Object.keys(collegeData[state].colleges[college].courses).map(
              (s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ),
            )}
        </select>

        <select
          value={branch}
          onChange={(e) => {
            setBranch(e.target.value);
            setSection("");
            setSyallubus("");
          }}
        >
          <option value="">Select Branches</option>
          {state &&
            college &&
            course &&
            Object.keys(
              collegeData[state].colleges[college].courses[course].branches,
            ).map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
        </select>

        <select
          value={section}
          onChange={(e) => {
            setSection(e.target.value);
            setSyallubus("");
          }}
        >
          <option value="">Select Section</option>
          {state &&
            college &&
            course &&
            branch &&
            Object.keys(
              collegeData[state].colleges[college].courses[course].branches[
                branch
              ].sections,
            ).map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
        </select>

        <select
          value={syallubus}
          onChange={(e) => {
            setSyallubus(e.target.value);
          }}
        >
          <option value="">Select SYallbus</option>
          {state &&
            college &&
            course &&
            branch &&
            section &&
            collegeData[state].colleges[college].courses[course].branches[
              branch
            ].sections[section].map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
        </select>

        <h2>
          {state} - {college} - {course} - {branch} - {section} - {syallubus}
        </h2>
      </main>
    </>
  );
};

export default login;
