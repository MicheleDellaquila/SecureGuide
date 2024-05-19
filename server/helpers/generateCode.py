import string
import secrets

def generate_code(length=6):
    """Genera un codice alfanumerico casuale."""
    alphabet = string.ascii_letters + string.digits
    return ''.join(secrets.choice(alphabet) for i in range(length))

