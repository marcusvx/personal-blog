import { Post } from "@prisma/client";
import { GetStaticProps } from "next";
import { Heading } from "react-bulma-components";
import prisma from "../lib/prisma";
import Layout from "./layout";

export const getStaticProps: GetStaticProps = async () => {
  const posts = await prisma.post.findMany({
    where: {
      published: true,
    },
    include: {
      author: {
        select: {
          firstName: true,
          lastName: true,
        },
      },
    },
  });
  return {
    props: { posts },
  };
};

type Props = {
  posts: Partial<Post>[];
};

const HomePage = ({ posts }: Props): React.ReactElement => {
  return (
    <Layout>
      <section className="hero is-info is-medium is-bold">
        <div className="hero-body">
          <div className="container has-text-centered">
            <Heading subtitle>Latest stories</Heading>
          </div>
        </div>
      </section>

      <div className="container">
        <section className="articles">
          <div className="column is-8 is-offset-2">
            {posts.map(({ id, title, abstract }: Post) => (
              <article key={id} className="card article">
                <div className="card-content">
                  <div className="media">
                    <div className="media-content has-text-centered">
                      <h3 className="title article-title">{title}</h3>
                      <div className="tags has-addons level-item">
                        <span className="tag is-rounded is-info">
                          @skeetskeet
                        </span>
                        <span className="tag is-rounded">May 10, 202X</span>
                      </div>
                    </div>
                  </div>
                  <div className="content article-body">{abstract}</div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default HomePage;
