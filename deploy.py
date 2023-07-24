import requests
import dotenv
import os

dotenv.load_dotenv()

BETA = True

base_url = (
    "https://beta-api.lightning-bot.com" if BETA else "https://api.lightning-bot.com"
)

deploy_url = base_url + "/api/v3/admin/deploy-docs"

resp = requests.post(
    deploy_url,
    json={
        "username": os.getenv("LB_USERNAME"),
        "password": os.getenv("LB_PASSWORD"),
    },
)

print(f"{resp.status_code} | {resp.text}")
