gcloud run deploy staging-hoi-pomerium-gateway \
    --project azoom-n-d-phong \
    --region asia-northeast1 \
    --platform managed \
    --allow-unauthenticated \
    --update-secrets=/pomerium/config.yaml=staging-hoi-pomerium-gateway-config:latest \
    --set-env-vars ROUTES="$(base64 -i ./pomerium-config/policy.staging.yaml)" \
    --image=gcr.io/pomerium-io/pomerium:v0.22.2-cloudrun