## For generation requirements.txt file
```
pip freeze > requirements.txt

```
## for running the server in development mode
```
uvicorn main:app --reload 
```

## for running the server in production mode
```
uvicorn main:app
```
this command will be used inside the docker container