#!/bin/sh
# Probes Simple Icons slugs; writes tools/logos.json with only slugs that resolve.
out=tools/logos.json; echo "{" > $out; first=1
while read id slug; do
  code=$(curl -s -o /dev/null -w '%{http_code}' -m 8 "https://cdn.simpleicons.org/$slug")
  echo "$id $slug $code" >&2
  if [ "$code" = 200 ]; then [ $first = 1 ] || echo "," >> $out; printf '"%s":"%s"' "$id" "$slug" >> $out; first=0; fi
done <<LIST
snowflake snowflake
databricks databricks
bigquery googlebigquery
looker looker
redshift amazonredshift
sap sap
fabric microsoftfabric
sqlserver microsoftsqlserver
oracle oracle
teradata teradata
postgres postgresql
clickhouse clickhouse
duckdb duckdb
dremio dremio
starburst trino
dbt dbt
cube cubedotdev
neo4j neo4j
palantir palantir
dataworld dataworld
tableau tableau
qlik qlik
metabase metabase
superset apachesuperset
businessobjects sap
cognos ibm
strategy microstrategy
domo domo
oracleanalytics oracle
thoughtspot thoughtspot
sigma sigma
wrenai wrenai
malloy malloy
LIST
echo "}" >> $out
