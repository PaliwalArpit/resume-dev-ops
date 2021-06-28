import React, { Component } from "react";
import Container from "../ui/Container";
import Sidebar from "./Sidebar";
import Main from "./Main";
import SQLLogo from "./images/sql.svg";
import SeleniumLogo from "./images/selenium.svg";
import PythonLogo from "./images/python.svg";
import JenkinsLogo from "./images/jenkins.svg";
import DockerLogo from "./images/docker.svg";
import PostmanLogo from "./images/postman.svg";
import Akamai from "./images/akamai-4.svg";
import PuppetLogo from "./images/puppet-1.svg";
import KubernetesLogo from "./images/kubernets.svg";
import AWSLogo from "./images/aws-2.svg";
import GitLogo from './images/git.svg';
import AnsibleLogo from './images/ansible.svg'
class Resume extends Component {
  render() {
    return (
      <Container>
        <Sidebar data={DATA.sidebar} />
        <Main {...DATA.main} />
      </Container>
    );
  }
}

const DATA = {
  sidebar: {
    education: {
      university: "Pune University",
      degree: "Bachelor of Information Technology",
      duration: "July 2010 - July 2014",
    },
    languages: [
      {
        name: "AWS",
        proficiency: 0.5,
        logo: AWSLogo
      },
      {
        name: "Jenkins",
        proficiency: 0.7,
        logo: JenkinsLogo,
      },
      {
        name: "Ansible",
        proficiency: 0.5,
        logo: AnsibleLogo
      },
      {
        name: "Puppet",
        proficiency: 0.5,
        logo: PuppetLogo
      },
      {
        name: "Kubernetes",
        proficiency: 0.5,
        logo: KubernetesLogo
      },
      {
        name: "Akamai",
        proficiency: 0.5,
        logo: Akamai
      },
      {
        name: "GIT",
        proficiency: 0.7,
        logo: GitLogo
      },
      {
        name: "Python",
        proficiency: 0.5,
        logo: PythonLogo,
      },

      {
        name: "Docker",
        proficiency: 0.7,
        logo: DockerLogo,
      },
      {
        name: "SQL",
        proficiency: 0.7,
        logo: SQLLogo,
      },
      {
        name: "Postman",
        proficiency: 0.8,
        logo: PostmanLogo,
      },
      {
        name: "Selenium",
        proficiency: 0.7,
        logo: SeleniumLogo,
      },
    ],
    frameworks: [

    ],
    tools: [
      "JMeter",
      "GIT",
      "Browserstack",
      "Splunk",
      "Sentry",
      "My SQL workbench",
      "Jenkins",
      "Docker",
      "Percy",
      "ServiceNow",
      "Selenoid",
      "Kubernetes",
      "Openshift"
    ],
    links: [
      {
        name: "Phone",
        display: "+91 9890764723",
        icon: "phone",
      },
      {
        name: "Email",
        display: "arpitpaliwal14@gmail.com",
        link: "mailto:arpitpaliwal14@gmail.com",
        icon: "envelope",
      },
      {
        name: "GitHub",
        display: "github.com/PaliwalArpit",
        link: "https://github.com/PaliwalArpit",
        icon: "github",
      },
      {
        name: "LinkedIn",
        display: "arpitpaliwal",
        link: "https://www.linkedin.com/in/arpit-paliwal-02841aa6/",
        icon: "linkedin",
      },
    ],
    hobby: {
      hobby: "Hiking, Cycling, Reading, PS",
    },
  },
  main: {
    name: "Arpit Paliwal",
    program: {
      term: "",
      nickname: "",
      name: "Software Engineering",
    },
    companies: [
      {
        name: "Redhat",
        title: "Devops Consultant",
        range: "March 2018, November 2020",
        projects: [
          {
            name: "Confidential - Devops",
            tools: [
              "Selenium",
              "Docker",
              "Jenkins",
              "GIT",
              "Java",
              "Ansible",
              "Kuberntes",
              "Puppet",
              "Akamai"
            ],
            achievements: [
              <span>Setting up production deployment pipelines using CI/CD </span>,
              <span>
                Part of a 10-person team that developed a CI/CD pipeline and cut software release times by 50% with a 15% increase in customer satisfaction.
                </span>,
              <span>Used Selenium to develop a series of new automated software tests that cut QA overheads by $5,000</span>,
              <span>Helped make the company's development, testing and production environments more consistent by implementing container technology using Kubernetes</span>,
              <span>Proactively identified and resolved performance bottlenecks for a new application before it went to production</span>,
              <span>Experience with <b>Puppet, Ansible and Kubernetes</b></span>
            ],
          },
          {
            name: "CLI application testing using Pytest",
            tools: ["Python", "Basic shell scripting"],
            achievements: [
              <span>
                Created Python test framework to automate command line application.
              </span>,
              <span>Wrote basic shell script to excecute tests</span>,
              <span>
                Created CI/CD pipeline which helps in running test over every
                code push
              </span>,
            ],
          },
          {
            name: "Confidential - Devops Engineer",
            tools: ["AWS", "Jenins", "Docker", "GIT", "Security"],
            achievements: [
              <span>Built deployment plans for QA, release candidate and final release builds using Jenkins</span>,
              <span>Wrote shell scripts using Python to automate tests for the production environment's infrastructure on AWSEC2</span>,
              <span>Identified and helped resolve application environment issues, such as connection firewall issues, cloud configuration issues and Linux problems</span>,
            ],
          },
        ],
      },
      {
        name: "Congizant",
        title: "Technical Lead",
        range: "Jan 2015, March 2018",
        projects: [
          {
            name: "ServiceNow",
            tools: ["Selenium", "Java", "Maven", "testNg", "Cucumber"],
            achievements: [
              <span>Worked on the test automation of ServiceNow.</span>,
              <span>
                Wrote test case parameters, including test scripts and
                automation guidelines.
              </span>,
              <span>
                Operated under Agile and Scrum frameworks to complete releases
                every 3 weeks and well-organized sprints.
              </span>,
            ],
          },
        ],
      },
      {
        name: "Extra activities",
        title: "",
        range: "",

        projects: [
          {
            name: "",
            tools: ["Kuberntes", "Ansible", "Openshift","Teraform","Akamai"],
            achievements: [
              <span>
                I have been working on my personal projects to deploy applications on Cloud using Heroku etc.
              </span>,
              <span>
                I have been learning orchestration tools like Kuberntes.
              </span>
            ],
          },
        ],
      },
    ],
  },
};

export default Resume;
