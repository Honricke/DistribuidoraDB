import psycopg2
from psycopg2.extras import RealDictCursor


# connection = psycopg2.connect(
#     host="aws-0-sa-east-1.pooler.supabase.com",
#     database="postgres",
#     user="postgres.clrkbwrkciyexghzrhat",
#     password="2mlGZvMvAO2OWID6",
#     port="5432",
#     cursor_factory=RealDictCursor,
# )

connection = psycopg2.connect(
    "dbname=distribuidora user=postgres password=87835060_Hen",cursor_factory=RealDictCursor,
)

operator = connection.cursor()
