import { getListMembers } from './apiRequests.js';

(function () {
  getListMembers()
    .then((response) => {
      const data = response.data;
    if (!data) return;
    createTableMembers(data.data);
  });

  function createTableMembers(members) {
    const tableMembers = document.createElement('table');
    tableMembers.className = 'table';

    const titleTable = document.createElement('thead');
    titleTable.className = 'thead-dark';
    const titleRowThead = document.createElement('tr');

    const header = ['Photo', 'Name', 'Report subject', 'Emails'];
    header.forEach((item) => {
      const thCol = document.createElement('th');
      thCol.scope = 'col';
      thCol.textContent = item;
      titleRowThead.appendChild(thCol);
    });
    titleTable.appendChild(titleRowThead);

    const tbody = document.createElement('tbody');

    members.forEach((member) => {
      const titleRowTbody = document.createElement('tr');
      const photo = document.createElement('td');
      const image = document.createElement('img');
      if (member.photo === null) {
        image.classList.add('photo-default');
        image.src = '/images/photo-default.jpg';
      } else {
        image.src = `http://quest-registration-api.groupbwt.com/storage/${member.photo}`;
      }

      photo.appendChild(image);
      titleRowTbody.appendChild(photo);

      const tdName = document.createElement('td');
      tdName.textContent = `${member.firstname} ${member.lastname}`;
      titleRowTbody.appendChild(tdName);

      const tdReportSubject = document.createElement('td');
      tdReportSubject.textContent = `${member.report_subject}`;
      titleRowTbody.appendChild(tdReportSubject);

      const tdEmail = document.createElement('td');
      const aEmail = document.createElement('a');
      aEmail.textContent = member.email;
      aEmail.href = `mailto:${member.email}`;
      tdEmail.appendChild(aEmail);
      titleRowTbody.appendChild(tdEmail);

      tbody.appendChild(titleRowTbody);
    });

    tableMembers.appendChild(titleTable);
    tableMembers.appendChild(tbody);

    document.getElementById('table-members').appendChild(tableMembers);
  }
})();
