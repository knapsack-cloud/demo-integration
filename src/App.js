import "@knapsack-cloud/demo-design-system-styles/dist/styles.css";

import {
  PageLayout,
  Footer,
  Header,
  Hero,
  TopNav,
  Layout,
  Card,
  Author,
  Button,
} from "@knapsack-cloud/demo-design-system-react";

function DemoApp() {
  return (
    <div className="demo-app knapsack-pattern-direct-parent">
      <PageLayout>
        <Hero
          buttonOne="#getting-started|Get started"
          buttonTwo="#live-demo|Live Demo"
          paragraph="Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua."
          headlineOne="Data to enrich your "
          headlineTwo="online business"
          showBackground
          header={
            <TopNav
              logo="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              links={["#1|Product", "#2|Features", "Marketplace", "Company"]}
              button="#login|Login"
            />
          }
        />
        <Layout
          clean={false}
          bandTitle="Two Card Layout Example"
          bandContent="Tempor adipiscing libero volutpat luctus integer phasellus curae, habitant tempus vel interdum augue aliquam, varius feugiat nulla suscipit magnis hac."
        >
          <Card
            body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium."
            label="Article"
            title="Boost your conversion rate"
            imgSrc="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixqx=exTPH5Vqg4&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
          >
            <Author
              date="Mar 10, 2020 "
              read="4 min read"
              imgSrc="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            >
              Brenna Goyette
            </Author>
            <Author
              date="Mar 16, 2020"
              read="6 min read"
              imgSrc="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            >
              Roel Aufderehar
            </Author>
            <Button url="#url" mode="info" size="medium" type="solid">
              Button
            </Button>
          </Card>
          <Card
            body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium."
            label="Video"
            title="How to use search engine optimization to drive sales"
            imgSrc="https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixqx=exTPH5Vqg4&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
          >
            <Author
              date="Mar 10, 2020 "
              read="4 min read"
              imgSrc="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            >
              Brenna Goyette
            </Author>
          </Card>
        </Layout>
        <Header
          imgSrc="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100"
          heading="Get in touch"
        >
          Mattis amet hendrerit dolor, quisque lorem pharetra. Pellentesque
          lacus nisi urna, arcu sociis eu. Orci vel lectus nisl eget eget ut
          consectetur. Sit justo viverra non adipisicing elit distinctio.
        </Header>
        <Footer
          social={{
            github: true,
            twitter: true,
            dribbble: true,
            facebook: true,
            instagram: true,
          }}
          tagline="Making the world a better place through constructing elegant hierarchies."
          copyright="2020 Workflow, Inc. All rights reserved."
          navigation={{
            legal: [
              { href: "#legal-1", name: "Claim" },
              { href: "#legal-2", name: "Privacy" },
              { href: "#legal-3", name: "Terms" },
            ],
            company: [
              { href: "#company-1", name: "About" },
              { href: "#company-2", name: "Blog" },
              { href: "#company-3", name: "Jobs" },
              { href: "#company-4", name: "Press" },
              { href: "#company-5", name: "Partners" },
            ],
            support: [
              { href: "#support-1", name: "Pricing" },
              { href: "#support-2", name: "Documentation" },
              { href: "#support-3", name: "Guides" },
              { href: "#support-4", name: "API Status" },
            ],
            solutions: [
              { href: "#solutions-1", name: "Marketing" },
              { href: "#solutions-2", name: "Analytics" },
              { href: "#solutions-3", name: "Commerce" },
              { href: "#solutions-4", name: "Insights" },
            ],
          }}
        />
      </PageLayout>
    </div>
  );
}
export default DemoApp;
