function transformString(s) {
  const length = s.length;

  if (length % 15 === 0) return s.split('').reverse().map(c => c.charCodeAt(0)).join(' ');

  if (length % 5 === 0) return s.split('').map(c => c.charCodeAt(0)).join(' ');

  if (length % 3 === 0) return s.split('').reverse().join('');

  return s;
}
