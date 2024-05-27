# LDAP settings

LDAP_SERVER = 'LDAP_SERVER'
LDAP_BIND_DN = 'LDAP_BIND_DN'
LDAP_BIND_PASSWORD = 'LDAP_BIND_PASSWORD'
LDAP_BASE_DN = 'LDAP_BASE_DN'
LDAP_AUTHENTICATION_FILTER = 'LDAP_AUTHENTICATION_FILTER'
LDAP_AUTHORIZATION_FILTER = 'LDAP_AUTHORIZATION_FILTER'
LDAP_ADMIN_USERNAME = 'LDAP_ADMIN_USERNAME'
# Default access level to give to users created when authenticated through LDAP
# for the first time. value should be the name of a Mage role (e.g. Viewer, Editor, Admin)
LDAP_DEFAULT_ACCESS = 'LDAP_DEFAULT_ACCESS'
LDAP_GROUP_FIELD = 'LDAP_GROUP_FIELD'
LDAP_ROLES_MAPPING = 'LDAP_ROLES_MAPPING'

UPDATE_ROLES_ON_LOGIN = 'UPDATE_ROLES_ON_LOGIN'

# Git settings

GIT_REPO_LINK = 'GIT_REPO_LINK'
GIT_REPO_PATH = 'GIT_REPO_PATH'
GIT_USERNAME = 'GIT_USERNAME'
GIT_EMAIL = 'GIT_EMAIL'
GIT_AUTH_TYPE = 'GIT_AUTH_TYPE'
GIT_BRANCH = 'GIT_BRANCH'
GIT_SYNC_ON_PIPELINE_RUN = 'GIT_SYNC_ON_PIPELINE_RUN'
GIT_SYNC_ON_START = 'GIT_SYNC_ON_START'
GIT_SYNC_ON_EXECUTOR_START = 'GIT_SYNC_ON_EXECUTOR_START'
GIT_SYNC_SUBMODULES = 'GIT_SYNC_SUBMODULES'

GIT_ENABLE_GIT_INTEGRATION = 'GIT_ENABLE_GIT_INTEGRATION'
GIT_OVERWRITE_WITH_PROJECT_SETTINGS = 'GIT_OVERWRITE_WITH_PROJECT_SETTINGS'

GIT_SSH_PUBLIC_KEY = 'GIT_SSH_PUBLIC_KEY'
GIT_SSH_PRIVATE_KEY = 'GIT_SSH_PRIVATE_KEY'
GIT_ACCESS_TOKEN = 'GIT_ACCESS_TOKEN'

# Git Provider OAuth settings

GHE_CLIENT_ID = 'GHE_CLIENT_ID'
GHE_CLIENT_SECRET = 'GHE_CLIENT_SECRET'
GHE_HOSTNAME = 'GHE_HOSTNAME'

GITLAB_HOST = 'GITLAB_HOST'
GITLAB_CLIENT_ID = 'GITLAB_CLIENT_ID'
GITLAB_CLIENT_SECRET = 'GITLAB_CLIENT_SECRET'

BITBUCKET_HOST = 'BITBUCKET_HOST'
BITBUCKET_OAUTH_KEY = 'BITBUCKET_OAUTH_KEY'
BITBUCKET_OAUTH_SECRET = 'BITBUCKET_OAUTH_SECRET'

# Okta settings

OKTA_DOMAIN_URL = 'OKTA_DOMAIN_URL'
OKTA_CLIENT_ID = 'OKTA_CLIENT_ID'
OKTA_CLIENT_SECRET = 'OKTA_CLIENT_SECRET'

# Google settings

GOOGLE_CLIENT_ID = 'GOOGLE_CLIENT_ID'
GOOGLE_CLIENT_SECRET = 'GOOGLE_CLIENT_SECRET'

# Active directory settings

ACTIVE_DIRECTORY_CLIENT_ID = 'ACTIVE_DIRECTORY_CLIENT_ID'
ACTIVE_DIRECTORY_CLIENT_SECRET = 'ACTIVE_DIRECTORY_CLIENT_SECRET'
ACTIVE_DIRECTORY_DIRECTORY_ID = 'ACTIVE_DIRECTORY_DIRECTORY_ID'
ACTIVE_DIRECTORY_ROLES_MAPPING = 'ACTIVE_DIRECTORY_ROLES_MAPPING'

# Azure DevOps settings

AZURE_DEVOPS_ORGANIZATION = 'AZURE_DEVOPS_ORGANIZATION'

# OIDC

OIDC_CLIENT_ID = 'OIDC_CLIENT_ID'
OIDC_CLIENT_SECRET = 'OIDC_CLIENT_SECRET'
OIDC_DISCOVERY_URL = 'OIDC_DISCOVERY_URL'
