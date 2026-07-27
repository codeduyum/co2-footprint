const MAX_LENGTH = 100

export function sanitizeText(value) {
  if (typeof value !== 'string') {
    return ''
  }

  return value
    .replace(/[<>]/g, '')   // Zeichen entfernen, mit denen HTML-Tags gebildet werden
    .slice(0, MAX_LENGTH)   // überlange Eingaben abschneiden
}