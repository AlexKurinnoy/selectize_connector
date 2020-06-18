
  let arrMembers = [];
  let arrTransfMembers = [];

  const searchMember = (obj) => {
    // console.log(window.User.rooms[0]);

    obj.room.households.forEach(household => {
      household.members.forEach(member => {
        if (+member.m_gender_id === +obj.gender &&
            +member.m_birth_year === +obj.year &&
            +member.m_birth_month === +obj.month &&
            +member.m_birth_day === +obj.day)
        {
          arrMembers.push({member_id: member.m_id, household_id: member.m_h_id});
        }
      });
    });

  };

  const transformMember = (obj) => {

    obj.members.forEach(member => {
      const room = obj.room;

      const households = room.households;
      for (let i = 0; i < households.length; i++) {
        if (+member.household_id === +households[i].h_id) {
          room.households = [];
          room.households.push(households[i]);

          const members = room.households[0].members;

          for (let j = 0; j < members.length; j++) {

            if (+member.member_id === +members[i].m_id) {
              room.households[0].members = [];
              room.households[0].members.push(members[i]);

              break;
            }
          }

          break;
        }
      }

      arrTransfMembers.push(room);
    });

    return arrTransfMembers;

  };




  module.exports = (param) =>  {
      const paramTransform = {
          room: param.room,
          members: arrMembers
      };

      searchMember(param);
      let data = transformMember(paramTransform);
      arrMembers = [];
      arrTransfMembers = [];
      return data
  }



