docker build --no-cache -f SQL\Dockerfile.PostgreSql -t snezhana4-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t snezhana4-java/app ../../..
