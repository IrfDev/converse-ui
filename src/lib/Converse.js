window.converse.initialize({
  authentication: 'anonymous',
  auto_login: true,
  auto_join_rooms: ['anonymous@conference.nomnom.im'],
  bosh_service_url: 'https://conversejs.org/http-bind/',
  jid: 'nomnom.im',
  notify_all_room_messages: ['anonymous@conference.nomnom.im'],
  show_controlbox_by_default: true,
  view_mode: 'overlayed',
});

export default converse;
