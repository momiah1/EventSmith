Tooling used to build demo data events/entities for Snowflake/Databricks. 

This tooling allows the user to define clickstream events + attach defined entities (i.e. add_to_cart Event + item_description Entity). These events + entity combinations can then be sent into a Snowflake/Databricks production table. In the middle there is the Snowplow architecture which does some data transformations to make sure they comply with the way the production table needs to look/feel.

Maintained by Mo Miah, please reach out for any help.

Download and use for your demos!
