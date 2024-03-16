import QuestionsWrapper from "../../shared/QuestionsWrapper";

const generalQuestionsAndAnswers = [
  {
    question: "What defines a relational database?",
    answer:
      "A database structure that organizes related data points within structured tables.",
  },
  {
    question:
      "What distinguishes relational databases from non-relational databases?",
    answer:
      "Relational databases structure data in tables, while non-relational (NoSQL) databases manage unstructured data across various formats.",
  },
  {
    question: "What is SQL and its role?",
    answer:
      "SQL is a language designed for the management and manipulation of data in relational databases.",
  },
  {
    question: "What are the ACID properties and their importance?",
    answer:
      "ACID principles (Atomicity, Consistency, Isolation, Durability) ensure reliable transaction processing in databases.",
  },
  {
    question: "What purpose does a primary key serve?",
    answer:
      "Serves as a unique identifier for each record within a database table.",
  },
  {
    question: "How is a foreign key used?",
    answer:
      "A foreign key is a field that links to the primary key of another table, establishing a relationship between the tables.",
  },
  {
    question: "What is the function of a database index?",
    answer:
      "An index enhances the speed of data retrieval operations within a database.",
  },
  {
    question: "How do JOIN and UNION differ in SQL?",
    answer:
      "JOIN merges rows based on a related column, whereas UNION consolidates results from distinct SELECT queries.",
  },
  {
    question: "What is the goal of normalization?",
    answer:
      "To organize data within a database to minimize redundancy and enhance data integrity.",
  },
  {
    question: "What are stored procedures?",
    answer:
      "They are precompiled SQL scripts that encapsulate complex database operations.",
  },
  {
    question: "Describe the operation of database transactions.",
    answer:
      "Transactions are series of operations treated as a single logical unit to ensure data integrity.",
  },
  {
    question: "Define a NoSQL database.",
    answer:
      "A database designed for unstructured or semi-structured data, not relying on traditional table structures.",
  },
  {
    question: "How do NoSQL and SQL databases compare?",
    answer:
      "NoSQL databases are schema-less and suited for unstructured data, while SQL databases use structured query language and predefined schemas.",
  },
  {
    question: "Why might one prefer NoSQL over SQL?",
    answer:
      "NoSQL databases offer scalability, flexibility for unstructured data, and adaptability to rapidly changing schemas.",
  },
  {
    question: "What are the four main types of NoSQL databases?",
    answer:
      "- Document Databases: Suited for semi-structured data.\n- Key-Value Stores: Simple data model storage.\n- Wide-Column Stores: Optimized for scalability and performance.\n- Graph Databases: Specialized in analyzing complex relationships.",
  },
  {
    question: "What challenges are associated with NoSQL databases?",
    answer:
      "Issues include ensuring data consistency, handling complex data aggregations, and the absence of a standardized query language.",
  },
];

const replicationShardingQuestionsAndAnswers = [
  {
    question:
      "What is the primary purpose of replication in database systems, and how does it differ between synchronous and asynchronous replication?",
    answer: (
      <div>
        Replication enhances data availability, durability, and scalability.{" "}
        <strong>Synchronous replication</strong> ensures data consistency by
        updating all replicas simultaneously, which may introduce latency.{" "}
        <strong>Asynchronous replication</strong>, in contrast, improves
        performance by allowing the primary operation to complete before all
        replicas are updated, albeit with a risk of temporary data
        inconsistency.
      </div>
    ),
  },
  {
    question:
      "Explain the concept of 'temporal dead zone' in the context of replication.",
    answer:
      "While 'temporal dead zone' is primarily a JavaScript concept, in replication, it may metaphorically describe the latency period in asynchronous replication, where replicas have yet to be updated, potentially leading to stale data access.",
  },
  {
    question:
      "What is Master-Master replication, and under what circumstances might it be used?",
    answer: (
      <p>
        <strong>Master-Master replication</strong> involves multiple databases
        acting as masters, each capable of handling read and write operations.
        This approach is used to achieve high availability, distribute workload,
        and minimize latency across geographically dispersed locations.
      </p>
    ),
  },
  {
    question:
      "Describe sharding and its primary goal in database architecture.",
    answer: (
      <p>
        Sharding involves partitioning a database into smaller, more manageable
        pieces, or shards, each hosted on separate servers. Its primary goal is
        to enhance performance and scalability by distributing data and workload
        across multiple servers.
      </p>
    ),
  },
  {
    question:
      "How does the choice of a shard key impact the efficiency of a sharded database?",
    answer: (
      <p>
        Selecting an appropriate shard key is critical for achieving an even
        distribution of data and workload across shards. A well-chosen shard key
        ensures balanced resource utilization and prevents performance
        bottlenecks by avoiding hotspots.
      </p>
    ),
  },
  {
    question:
      "Discuss the challenges associated with sharding in relational databases compared to NoSQL databases.",
    answer: (
      <p>
        Sharding introduces complexity in relational databases, especially in
        maintaining inter-table relationships and ACID properties across shards.
        This often requires intricate logic for consistency. In contrast, NoSQL
        databases, designed with horizontal scaling in mind, naturally
        accommodate sharding and its eventual consistency model, making them
        better suited for distributed architectures.
      </p>
    ),
  },
  {
    question:
      "What is eventual consistency, and why is it relevant in the context of NoSQL databases?",
    answer: (
      <p>
        <strong>Eventual consistency</strong> refers to a model where database
        replicas may temporarily diverge but will converge to consistency over
        time. This principle is key in NoSQL databases, facilitating high
        availability and scalability for applications where strict, immediate
        consistency is not paramount.
      </p>
    ),
  },
  {
    question:
      "Explain how consistent hashing facilitates sharding in distributed databases.",
    answer: (
      <p>
        Consistent hashing significantly reduces the need for rebalancing data
        when shards are added or removed, by ensuring a stable, even
        distribution of data. This technique is crucial for maintaining
        efficient operation and scalability in distributed database
        environments.
      </p>
    ),
  },
];

const objectStorageQuestionsAndAnswers = [
  {
    question:
      "What characterizes object storage, and how does it stand apart from traditional databases?",
    answer: (
      <p>
        Object storage organizes data as distinct objects, each containing the
        data, metadata, and a unique identifier, in contrast to traditional
        databases that arrange structured data with inter-entity relationships.
        This flat address space model of object storage simplifies scalability
        and is better suited for unstructured data types like multimedia files
        and backups.
      </p>
    ),
  },
  {
    question:
      "Why does object storage offer superior scalability over file storage systems?",
    answer: (
      <p>
        The scalability of object storage comes from its use of a flat,
        non-hierarchical address space, which simplifies the storage
        infrastructure's expansion. This model efficiently supports vast
        quantities of unstructured data, sidestepping the organizational and
        scalability issues inherent in traditional file storage systems.
      </p>
    ),
  },
  {
    question:
      "Identify prevalent applications of object storage within system architectures.",
    answer: (
      <p>
        Object storage is widely utilized for archiving extensive multimedia
        content, performing database backups, and hosting web content. Its
        scalability, robustness, and internet-based accessibility make it an
        ideal choice for cloud storage platforms, facilitating a broad array of
        digital storage needs.
      </p>
    ),
  },
  {
    question:
      "How does metadata enhance the utility of object storage for data management?",
    answer: (
      <p>
        Metadata enriches object storage by providing expansive details about
        each data object, enabling efficient organization, management, and
        retrieval. This additional information allows for sophisticated data
        handling capabilities without necessitating direct interaction with the
        content of the objects themselves.
      </p>
    ),
  },
  {
    question:
      "What limitations exist when storing large files in traditional databases?",
    answer: (
      <p>
        Traditional databases, designed for structured data, face challenges
        with large unstructured files, leading to performance issues, increased
        storage demands, and inefficient operations. Such environments are not
        optimized for the storage and retrieval of large files, impacting system
        efficiency and scalability.
      </p>
    ),
  },
  {
    question:
      "Describe the process and advantages of data retrieval in object storage systems.",
    answer: (
      <p>
        Object storage facilitates data retrieval through direct HTTP requests
        to the uniquely identified objects. This approach, capitalizing on
        HTTP's stateless protocol, ensures scalable, internet-wide access
        without the complexities of traditional database queries, offering a
        streamlined method for accessing large volumes of data.
      </p>
    ),
  },
  {
    question:
      "What is the significance of object storage within cloud computing frameworks?",
    answer: (
      <p>
        Object storage is pivotal in cloud computing for offering scalable,
        reliable, and cost-effective data storage solutions. It caters to
        diverse cloud-based applications, including web services, data
        analytics, and disaster recovery, by managing the vast and growing data
        requirements with flexibility and efficiency.
      </p>
    ),
  },
  {
    question:
      "Discuss the compromises involved in adopting object storage over conventional file storage or database systems.",
    answer: (
      <p>
        While object storage excels in scalability and cost-effectiveness for
        unstructured data, it may introduce increased latency and lacks the
        transactional and querying features of traditional databases. However,
        its benefits often surpass these limitations, particularly for
        applications managing large data volumes.
      </p>
    ),
  },
];

const Database = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          marginTop: "20px",
        }}
      >
        <QuestionsWrapper
          storageKey="db-general"
          questions={generalQuestionsAndAnswers}
        />

        <h2>Replication & Sharding</h2>

        <QuestionsWrapper
          storageKey="db-replication-sharding"
          questions={replicationShardingQuestionsAndAnswers}
        />

        <h2>Object Storage</h2>

        <QuestionsWrapper
          storageKey="db-object-storage"
          questions={objectStorageQuestionsAndAnswers}
        />
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </>
  );
};

export default Database;
