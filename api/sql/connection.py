import psycopg2


connection = psycopg2.connect(
        host = 'localhost', 
        database = 'estoque',
        user = 'postgres',
        password = 'waradu',
        port = '5432'
        )
operator = connection.cursor()


