function schedule(meetings) {
  meetings.sort((a, b) => a.end - b.end);
  let accepted = [];
  let lastEnd = 0;
  for (let m of meetings) {
    if (m.start >= lastEnd) {
      accepted.push(m);
      lastEnd = m.end;
    }
  }
  return accepted;
}