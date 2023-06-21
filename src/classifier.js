function classifier(input) {
  function calculateAge(dob) {
    const birthDate = new Date(dob);
    const currentDate = new Date();
    const age = currentDate.getFullYear() - birthDate.getFullYear();
    return age;
  }

  input.sort((a, b) => a.regNo.localeCompare(b.regNo));

  const groups = {};
  let groupCounter = 1;

  for (const student of input) {
    const age = calculateAge(student.dob);
    let groupFound = false;

    for (const group of Object.values(groups)) {
      const oldestMember = Math.max(...group.members.map((m) => m.age));
      if (group.members.length < 3 && age - oldestMember <= 5) {
        group.members.push({ ...student, age });
        group.oldest = Math.max(group.oldest, age);
        group.sum += age;
        group.regNos.push(parseInt(student.regNo, 10));
        group.regNos.sort((a, b) => a - b);
        groupFound = true;
        break;
      }
    }

    if (!groupFound) {
      groups[`group${groupCounter}`] = {
        members: [{ ...student, age }],
        oldest: age,
        sum: age,
        regNos: [parseInt(student.regNo, 10)],
      };
      groupCounter++;
    }
  }

  return {
    noOfGroups: Object.keys(groups).length,
    ...groups,
  };
}

const input = [
  {
    name: "Hendrick",
    dob: "1853-07-18T00:00:00.000Z",
    regNo: "041",
  },
  {
    name: "Albert",
    dob: "1879-03-14T00:00:00.000Z",
    regNo: "033",
  },
  {
    name: "Marie",
    dob: "1867-11-07T00:00:00.000Z",
    regNo: "024",
  },
  {
    name: 'Neils',
    dob: '1853-10-07T00:00:00.000Z',
    regNo: '02',
  },
  {
    name: 'Max',
    dob: '1853-04-23T00:00:00.000Z',
    regNo: '014',
  },
  {
    name: 'Erwin',
    dob: '1854-08-12T00:00:00.000Z',
    regNo: '09',
  },
  {
    name: 'Auguste',
    dob: '1854-01-28T00:00:00.000Z',
    regNo: '08',
  },
  {
    name: 'Karl',
    dob: '1852-12-05T00:00:00.000Z',
    regNo: '120',
  },
  {
    name: 'Louis', 
    dob: '1852-08-15T00:00:00.000Z',
    regNo: '022',
  },
  {
    name: 'Arthur',
    dob: '1892-09-10T00:00:00.000Z',
    regNo: '321',
  },
  {
    name: 'Paul',
    dob: '1902-08-08T00:00:00.000Z',
    regNo: '055',
  },
  {
    name: 'William',
    dob: '1890-03-31T00:00:00.000Z',
    regNo: '013',
  },
  {
    name: 'Owen',
    dob: '1853-04-26T00:00:00.000Z',
    regNo: '052',
  },
  {
    name: 'Martin',
    dob: '1854-02-15T00:00:00.000Z',
    regNo: '063',
  },
  {
    name: 'Guye',
    dob: '1854-10-15T00:00:00.000Z',
    regNo: '084',
  },
  {
    name: 'Charles',
    dob: '1954-02-14T00:00:00.000Z',
    regNo: '091',
  },
];


export default classifier;
