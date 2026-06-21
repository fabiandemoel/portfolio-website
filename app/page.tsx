import { MoveRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ExperienceCard from "@/components/experience-card"
import SkillBadge from "@/components/skill-badge"
import CertificationCard from "@/components/certification-card"
import ScrollSpyNav from "@/components/scroll-spy-nav"
import MobileNav from "@/components/mobile-nav"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="font-bold text-xl">
            Fabian de Moel
          </Link>
          <ScrollSpyNav />
          <div className="flex items-center gap-4">
            <MobileNav />
            <Button asChild>
              <a
                href="https://linkedin.com/in/fabian-de-moel"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-linkedin"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </header>

      <main className="container py-12 space-y-24">
        {/* Hero Section */}
        <section className="py-12 md:py-24 lg:py-32 flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Fabian de Moel
              <br />
              <span className="text-primary">Data & AI Engineer</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-[600px]">
              Specialized in innovative data-driven solutions, cloud platforms, and generative AI applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="#experience">
                  View Experience <MoveRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="mailto:fabiandemoel@gmail.com" className="flex items-center gap-2">
                  Contact Me
                </a>
              </Button>
            </div>
          </div>
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px] rounded-full overflow-hidden border-4 border-primary/20">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/aragonai-5c538c64-2048-4dda-b76e-9ed40dada43c%20copy-Jpxn0OlMqicb6kkx8LaGXuY0mtJc02.jpeg"
                alt="Fabian de Moel"
                fill
                className="object-cover object-[center_40%]"
                priority
              />
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Experience</h2>
            <p className="text-muted-foreground">My professional journey in Data & AI Engineering.</p>
          </div>
          <div className="timeline mt-12 relative">
            <ExperienceCard
              title="Data & AI Engineer"
              company="Intergamma"
              period="October 2022 – Present"
              responsibilities={[
                "Developed data pipelines, managed migration of legacy systems to Snowflake cloud.",
                "Led creation and architecture of a Generative AI platform using Retrieval-Augmented Generation (RAG).",
                "Built webapps and APIs using FastAPI, Azure OpenAI, Docker, Streamlit, CircleCI, and Azure DevOps.",
                "Facilitated data governance, ensuring best practices with Snowflake, Docker, Kubernetes, Pentaho, Mulesoft, Dataiku, and LangWatch.",
              ]}
            />
            <ExperienceCard
              title="Data & Analytics Consultant"
              company="KVL"
              period="January 2022 – September 2022"
              responsibilities={[
                "Developed data pipelines and performed data lineage tasks in Databricks and Azure.",
                "Supported migration projects (e.g., ERP migration to SAP).",
                "Built Tableau metadata pipelines and engaged in Agile methodologies.",
              ]}
            />
            <ExperienceCard
              title="Data Steward Finance & Risk"
              company="Rabobank"
              period="2019 – 2021"
              responsibilities={[
                "Specialized in data lineage, data governance, and agile collaboration between business and IT.",
                "Worked with SQL databases, Power BI, and VBA for critical financial datasets.",
              ]}
              isLast={true}
            />
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Skills & Proficiencies</h2>
            <p className="text-muted-foreground">My technical skills, languages, and personal abilities.</p>
          </div>

          {/* Technical Skills */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold">Technical Skills</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold mb-3">Languages</h4>
                <div className="flex flex-wrap gap-2">
                  <SkillBadge
                    name="Python"
                    certified={true}
                    certificationInfo="PCAP - Certified Associate in Python Programming (Jan 2024) & PCEP – Certified Entry-Level Python Programmer (Nov 2023)"
                  />
                  <SkillBadge name="Advanced SQL" />
                </div>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-3">Cloud & Data Platforms</h4>
                <div className="flex flex-wrap gap-2">
                  <SkillBadge
                    name="Snowflake"
                    certified={true}
                    certificationInfo="SnowPro Core Certification (Oct 2023, expires Oct 2025). Skills: Cloud computing, ETL, API management, Datawarehousing."
                  />
                  <SkillBadge
                    name="Databricks"
                    certified={true}
                    certificationInfo="Databricks Certified Data Engineer Associate (Feb 2025, expires Feb 2027). Skills: Azure Databricks, Data Engineering."
                  />
                  <SkillBadge
                    name="Azure Platform"
                    certified={true}
                    certificationInfo="Microsoft Certified: Azure Fundamentals (Nov 2023) & Microsoft Certified: Azure Data Fundamentals (Nov 2023). Skills: Cloud computing, Microsoft Azure."
                  />
                  <SkillBadge
                    name="Azure OpenAI"
                    certified={true}
                    certificationInfo="Microsoft Certified: Azure AI Fundamentals (Nov 2023). Skills: Microsoft Azure, Conversational AI, Retrieval Augmented Generation (Generative AI)."
                  />
                  <SkillBadge name="Logic Apps" />
                  <SkillBadge name="Azure DevOps" />
                  <SkillBadge name="Docker" />
                  <SkillBadge name="Kubernetes" />
                  <SkillBadge name="Pentaho" />
                  <SkillBadge name="Mulesoft" />
                  <SkillBadge
                    name="Dataiku"
                    certified={true}
                    certificationInfo="Dataiku Core Designer (Sep 2024). Skills: Data Science, Machine Learning, Data Preparation."
                  />
                  <SkillBadge name="MS SSMS" />
                  <SkillBadge name="SSIS" />
                </div>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-3">Visualization & BI</h4>
                <div className="flex flex-wrap gap-2">
                  <SkillBadge
                    name="Power BI"
                    certified={true}
                    certificationInfo="Microsoft Certified: Power Platform Fundamentals (Jul 2022). Skills: Microsoft Power BI, Microsoft Power Automate, Microsoft Power Apps."
                  />
                  <SkillBadge name="Tableau" />
                </div>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-3">AI & ML</h4>
                <div className="flex flex-wrap gap-2">
                  <SkillBadge name="Generative AI" />
                  <SkillBadge
                    name="Retrieval-Augmented Generation"
                    certified={true}
                    certificationInfo="Microsoft Certified: Azure AI Fundamentals (Nov 2023). Skills: Microsoft Azure, Conversational AI, Retrieval Augmented Generation (Generative AI)."
                  />
                  <SkillBadge name="Conversational AI" />
                </div>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-3">Data Engineering</h4>
                <div className="flex flex-wrap gap-2">
                  <SkillBadge
                    name="Apache Airflow"
                    certified={true}
                    certificationInfo="Astronomer Certification for Apache Airflow Fundamentals (Jan 2024). Skills: Apache Airflow, Data Orchestration, ETL Pipelines."
                  />
                  <SkillBadge
                    name="Data Vault"
                    certified={true}
                    certificationInfo="Certified Data Vault Modeller (May 2021). Skills: Data Vault, Datawarehousing, Data Modeling."
                  />
                  <SkillBadge name="ETL/ELT" />
                  <SkillBadge name="Data Modeling" />
                </div>
              </div>
            </div>
          </div>

          {/* Languages & Personal Skills */}
          <div className="pt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Languages</h3>
              <div className="rounded-lg border bg-background p-6 shadow-sm">
                <ul className="space-y-2">
                  <li className="flex justify-between items-center">
                    <span className="flex items-center">
                      <span className="mr-2 text-lg" aria-hidden="true">
                        🇳🇱
                      </span>{" "}
                      Dutch
                    </span>
                    <span className="text-muted-foreground">Fluent</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="flex items-center">
                      <span className="mr-2 text-lg" aria-hidden="true">
                        🇬🇧
                      </span>{" "}
                      English
                    </span>
                    <span className="text-muted-foreground">Proficient</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="flex items-center">
                      <span className="mr-2 text-lg" aria-hidden="true">
                        🇪🇸
                      </span>{" "}
                      Spanish
                    </span>
                    <span className="text-muted-foreground">Elementary</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="flex items-center">
                      <span className="mr-2 text-lg" aria-hidden="true">
                        🇫🇷
                      </span>{" "}
                      French
                    </span>
                    <span className="text-muted-foreground">Elementary</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="flex items-center">
                      <span className="mr-2 text-lg" aria-hidden="true">
                        🇩🇪
                      </span>{" "}
                      German
                    </span>
                    <span className="text-muted-foreground">Elementary</span>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Personal Skills</h3>
              <div className="rounded-lg border bg-background p-6 shadow-sm">
                <ul className="space-y-2">
                  <li>Strong analytical skills</li>
                  <li>Attention to detail</li>
                  <li>Creativity</li>
                  <li>Excellent technical communication abilities</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Featured Projects</h2>
            <p className="text-muted-foreground">Highlights of my technical work and innovations.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="group relative overflow-hidden rounded-lg border bg-background p-6 shadow-sm transition-shadow hover:shadow-md">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Cairn</h3>
                <p className="text-muted-foreground">
                  An auditable, queryable benchmark over official EU/NL climate data — every figure traces back to a
                  hash-pinned official source, with a downloadable CSRD/ESRS E1 disclosure bundle.
                </p>
                <div className="pt-4">
                  <h4 className="text-sm font-medium">Technologies</h4>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <SkillBadge name="Evidence.dev" />
                    <SkillBadge name="DuckDB" />
                    <SkillBadge name="dbt" />
                    <SkillBadge name="Python" />
                  </div>
                </div>
                <div className="pt-4 flex flex-wrap gap-4">
                  <a
                    href="https://github.com/fabiandemoel/Cairn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline inline-flex items-center"
                  >
                    Code <MoveRight className="ml-1 h-4 w-4" />
                  </a>
                  <a
                    href="https://cairn.fabiandemoel.nl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline inline-flex items-center"
                  >
                    Live Demo <MoveRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg border bg-background p-6 shadow-sm transition-shadow hover:shadow-md">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Excel AI Assistant</h3>
                <p className="text-muted-foreground">
                  Developed an AI-powered Excel assistant as part of the Generative AI Suite for Intergamma. This tool
                  helps users analyze and extract insights from Excel data using natural language prompts. It can also
                  generate new data in Excel according to prompts and rules set by the user.
                </p>
                <div className="pt-4">
                  <h4 className="text-sm font-medium">Technologies</h4>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <SkillBadge name="Azure OpenAI" />
                    <SkillBadge name="Python" />
                    <SkillBadge name="FastAPI" />
                    <SkillBadge name="React" />
                  </div>
                </div>
                <div className="pt-4">
                  <a
                    href="https://www.linkedin.com/posts/fabian-de-moel_excel-ai-presentation-activity-7303160661012815872-2F_D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline inline-flex items-center"
                  >
                    View on LinkedIn <MoveRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg border bg-background p-6 shadow-sm transition-shadow hover:shadow-md">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">First GenAI Chatbot at Intergamma</h3>
                <p className="text-muted-foreground">
                  Created and introduced the first Generative AI chatbot at Intergamma as a proof of concept. This
                  project demonstrated the potential of AI-driven customer service and internal knowledge management.
                </p>
                <div className="pt-4">
                  <h4 className="text-sm font-medium">Technologies</h4>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <SkillBadge name="Generative AI" />
                    <SkillBadge name="Azure OpenAI" />
                    <SkillBadge name="RAG" />
                    <SkillBadge name="Conversational AI" />
                  </div>
                </div>
                <div className="pt-4">
                  <a
                    href="https://www.linkedin.com/pulse/how-i-introduced-first-genai-chatbot-intergamma-fabian-de-moel-ynxke"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline inline-flex items-center"
                  >
                    Read Article <MoveRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education & Certifications Section */}
        <section id="education-certifications" className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Education & Certifications</h2>
            <p className="text-muted-foreground">Academic background and professional qualifications.</p>
          </div>

          {/* Education */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Education</h3>
            <div className="rounded-lg border bg-background p-6 shadow-sm">
              <h4 className="text-xl font-semibold">BSc Business Administration</h4>
              <p className="text-muted-foreground">University of Amsterdam</p>
              <p className="mt-2">Minor: Programming</p>
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Certifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <CertificationCard
                name="Databricks Certified Data Engineer Associate"
                awardDate="Feb. 2025"
                expiryDate="Feb. 2027"
                skills="Azure Databricks"
                certificateUrl="https://credentials.databricks.com/c4d4564d-a3f3-4236-96e3-727e4f6afab3"
              />
              <CertificationCard
                name="Dataiku Core Designer"
                awardDate="Sep. 2024"
                certificateUrl="https://verify.skilljar.com/c/swg97oh56s3b"
              />
              <CertificationCard
                name="Astronomer Certification for Apache Airflow Fundamentals"
                awardDate="Jan. 2024"
                skills="Apache Airflow"
                certificateUrl="https://www.credly.com/badges/a3959283-8a6c-4159-b513-6a8f5c776912/linked_in_profile"
              />
              <CertificationCard
                name="PCAP - Certified Associate in Python Programming"
                awardDate="Jan. 2024"
                skills="Python"
                certificateUrl="https://verify.openedg.org/?id=zqD9.fX5R.iaVy"
              />
              <CertificationCard
                name="Microsoft Certified: Azure AI Fundamentals"
                awardDate="Nov. 2023"
                skills="Microsoft Azure, Conversational AI, Retrieval Augmented Generation (Generative AI)"
                certificateUrl="https://learn.microsoft.com/api/credentials/share/en-us/FabiandeMoel-6151/B0BC86833EAB2917?sharingId"
              />
              <CertificationCard
                name="Microsoft Certified: Azure Data Fundamentals"
                awardDate="Nov. 2023"
                skills="Cloud computing, Microsoft Azure"
                certificateUrl="https://learn.microsoft.com/api/credentials/share/en-us/FabiandeMoel-6151/25D46D136B695072?sharingId"
              />
              <CertificationCard
                name="Microsoft Certified: Azure Fundamentals"
                awardDate="Nov. 2023"
                skills="Cloud computing, Microsoft Azure"
                certificateUrl="https://learn.microsoft.com/api/credentials/share/en-gb/FabiandeMoel-6151/11A8BF959A15E1F4?sharingId"
              />
              <CertificationCard
                name="PCEP – Certified Entry-Level Python Programmer"
                awardDate="Nov. 2023"
                skills="Python"
                certificateUrl="https://verify.openedg.org/?id=zsi0.JN2O.LCLu"
              />
              <CertificationCard
                name="SnowPro Core Certification"
                awardDate="Oct. 2023"
                expiryDate="Oct. 2025"
                skills="Cloud computing, ETL, API management, Datawarehousing, Snowflake"
                certificateUrl="https://www.credly.com/badges/7718182f-3ae6-45b8-988b-81582e9bac0c/linked_in_profile"
              />
              <CertificationCard
                name="Learn JavaScript Course (Codecademy)"
                awardDate="May 2023"
                skills="JavaScript"
                certificateUrl="https://www.codecademy.com/profiles/FabiandeMoel/certificates/705dcb15de0da4dd9d9fc4f3274b430e"
              />
              <CertificationCard
                name="Microsoft Certified: Power Platform Fundamentals"
                awardDate="Jul. 2022"
                skills="Microsoft Power BI, Microsoft Power Automate, Microsoft Power Apps"
                certificateUrl="https://www.credly.com/badges/160e1b7e-5545-47aa-8f6e-45a9afceef40/public_url"
              />
              <CertificationCard
                name="Certified Data Vault Modeller"
                awardDate="May 2021"
                skills="Data Vault, Datawarehousing"
              />
              <CertificationCard
                name="Creating New BigQuery Datasets and Visualizing Insights"
                certificateUrl="https://coursera.org/share/eee8657011dd6da8458f28749288a369"
              />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-background">
        <div className="container py-8 md:py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Fabian de Moel. All rights reserved.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://linkedin.com/in/fabian-de-moel"
                className="text-muted-foreground hover:text-foreground transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/fabiandemoel"
                className="text-muted-foreground hover:text-foreground transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

