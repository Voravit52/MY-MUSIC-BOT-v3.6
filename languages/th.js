module.exports = {
    // คำสั่งเล่นเพลง
    playDescription: 'เล่นเพลง',
    playErrorNotInVoiceChannel: 'คุณต้องอยู่ในช่องเสียงเพื่อใช้คำสั่งนี้!',
    playSearchingForSong: 'กำลังค้นหา {song}...',
    playErrorTitle: 'ข้อผิดพลาด',
    playSearchingTitle: 'กำลังค้นหาเพลง',
  // คำสั่งปรับระดับเสียง
  volumeDescription: 'ตั้งค่าระดับเสียง',
  volumeNoSongPlaying: 'ไม่มีเพลงกำลังเล่นอยู่ในขณะนี้!',
  volumeInvalidLevel: 'ระดับเสียงต้องอยู่ระหว่าง 0 ถึง 100.',
  volumeSetTitle: 'ตั้งค่าระดับเสียง',
  volumeSetDescription: 'ตั้งค่าระดับเสียงเป็น {volume}%.',  
  // คำสั่งแสดงเวลาปัจจุบัน
  timeDescription: 'แสดงเวลาการเล่นเพลงปัจจุบัน',
  timeNoSongPlaying: 'ไม่มีเพลงกำลังเล่นอยู่ในขณะนี้!',
  timeTitle: 'เวลาการเล่นปัจจุบัน',
  timeDescriptionText: 'เวลาปัจจุบัน: `{currentTime}` / `{duration}`',
    // คำสั่งหยุดเพลง
    stopDescription: 'หยุดเพลงและล้างคิว',
    stopNoSongPlaying: 'ไม่มีเพลงกำลังเล่นอยู่ในขณะนี้!',
    stopTitle: 'เพลงหยุดแล้ว',
    stopDescriptionText: 'เพลงถูกหยุดและคิวถูกล้างแล้ว',

     // คำสั่งข้ามเพลง
  skipDescription: 'ข้ามเพลงปัจจุบัน',
  skipNoSongPlaying: 'ไม่มีเพลงกำลังเล่นอยู่ในขณะนี้!',
  skipNoMoreSongs: 'ไม่มีเพลงที่จะข้ามอีกแล้ว!',
  skipTitle: 'ข้ามเพลง',
  skipDescriptionText: 'ข้ามเพลงปัจจุบันแล้ว!',
   // คำสั่งสุ่มคิว
   shuffleDescription: 'สุ่มคิว',
   shuffleNoSongPlaying: 'ไม่มีเพลงกำลังเล่นอยู่ในขณะนี้!',
   shuffleTitle: 'คิวถูกสุ่มแล้ว',
   shuffleDescriptionText: 'คิวถูกสุ่มแล้ว.',
    // คำสั่งค้นหาช่วงเวลา
  seekDescription: 'ค้นหาช่วงเวลาในเพลง',
  seekNoSongPlaying: 'ไม่มีเพลงกำลังเล่นอยู่ในขณะนี้!',
  seekInvalidTime: 'เวลาต้องอยู่ภายในระยะเวลาของเพลง.',
  seekTitle: 'ค้นหา',
  seekDescriptionText: 'ค้นหาที่เวลา {time} ในเพลง.',
    // คำสั่งเล่นต่อ
    resumeDescription: 'เล่นเพลงที่หยุดชั่วคราวต่อ',
    resumeNoSongPlaying: 'ไม่มีเพลงกำลังเล่นอยู่ในขณะนี้!',
    resumeAlreadyPlaying: 'เพลงกำลังเล่นอยู่แล้ว!',
    resumeTitle: 'เล่นเพลงต่อ',
    resumeDescriptionText: 'เล่นเพลงต่อแล้ว!',
      // คำสั่งลบเพลงออกจากคิว
  removeDescription: 'ลบเพลงออกจากคิว',
  removeNoSongPlaying: 'ไม่มีเพลงกำลังเล่นอยู่ในขณะนี้!',
  removeInvalidIndex: 'ดัชนีเพลงไม่ถูกต้อง.',
  removeTitle: 'ลบเพลงแล้ว',
  removeDescriptionText: 'ลบ {song} ออกจากคิวแล้ว.',
   // คำสั่งแสดงคิวปัจจุบัน
   queueDescription: 'แสดงคิวปัจจุบัน',
   queueNoSongPlaying: 'ไม่มีเพลงกำลังเล่นอยู่ในขณะนี้!',
   queueTitle: 'คิวปัจจุบัน',
   queueFooterText: 'ระยะเวลารวม: {duration}',
     // คำสั่งเล่นเพลงก่อนหน้า
  previousDescription: 'เล่นเพลงก่อนหน้า',
  previousNoSongPlaying: 'ไม่มีเพลงกำลังเล่นอยู่ในขณะนี้!',
  previousTitle: 'กำลังเล่นเพลงก่อนหน้า',
  previousDescriptionText: 'กำลังเล่นเพลงก่อนหน้าในคิว.',
    // คำสั่งหยุดชั่วคราว
    pauseDescription: 'หยุดเพลงชั่วคราว',
    pauseNoSongPlaying: 'ไม่มีเพลงกำลังเล่นอยู่ในขณะนี้!',
    pauseAlreadyPaused: 'เพลงถูกหยุดชั่วคราวอยู่แล้ว!',
    pauseTitle: 'เพลงหยุดชั่วคราว',
    pauseDescriptionText: 'เพลงถูกหยุดชั่วคราวแล้ว!',
     // คำสั่งแสดงเพลงที่กำลังเล่น
  nowplayingDescription: 'แสดงเพลงที่กำลังเล่น',
  nowplayingNoSong: 'ไม่มีเพลงกำลังเล่นอยู่ในขณะนี้!',
  nowplayingTitle: 'กำลังเล่น',
    // คำสั่งลูป
    loopDescription: 'ตั้งค่าโหมดลูป',
    loopNoSong: 'ไม่มีเพลงกำลังเล่นอยู่ในขณะนี้!',
    loopInvalidMode: 'โหมดลูปไม่ถูกต้อง โหมดที่ถูกต้องคือ 0 (ปิด), 1 (เพลง), 2 (คิว).',
    loopModeDisabled: 'โหมดลูปถูกปิด',
    loopSongEnabled: 'ลูปเพลงถูกเปิดใช้งาน',
    loopQueueEnabled: 'ลูปคิวถูกเปิดใช้งาน',
    loopTitle: 'ตั้งค่าโหมดลูป',
      // คำสั่งกระโดดไปยังเพลง
  jumpDescription: 'กระโดดไปยังเพลงในคิว',
  jumpNoSong: 'ไม่มีเพลงกำลังเล่นอยู่ในขณะนี้!',
  jumpInvalidIndex: 'ดัชนีเพลงไม่ถูกต้อง.',
  jumpTitle: 'กระโดดแล้ว',
  jumpSuccess: 'กระโดดไปยังเพลงหมายเลข {index}.',
  findDescription: 'ค้นหาเพลง',
  findNoVoiceChannel: 'คุณต้องอยู่ในช่องเสียงเพื่อใช้คำสั่งนี้.',
  findNoResults: 'ไม่พบเพลงที่คุณค้นหา.',
  findTitle: 'ผลการค้นหา',
  findPrompt: 'เลือกเพลงที่จะเพิ่มไปยังคิว:',
  findSongSelected: 'เลือกเพลง **{title}** เพื่อเล่น!',
  // filters.js
  filters: {
    description: 'แสดงฟิลเตอร์เสียงที่มีและใช้ฟิลเตอร์โดยคลิกที่ปุ่ม',
    errorTitle: 'ข้อผิดพลาด',
    noSongPlaying: 'ไม่มีเพลงกำลังเล่นอยู่ในขณะนี้!',
    availableFiltersTitle: 'ฟิลเตอร์ที่มี',
    clickButtonToApply: 'คลิกที่ปุ่มเพื่อใช้ฟิลเตอร์',
    clearFiltersLabel: 'ล้างฟิลเตอร์',
    notYourButton: 'คุณไม่สามารถใช้ปุ่มนี้ได้!',
    filtersCleared: 'ฟิลเตอร์ทั้งหมดถูกล้างแล้ว.',
    appliedFilter: 'ใช้ฟิลเตอร์',
    timeout: 'หมดเวลาการเลือกฟิลเตอร์.'
  },
  clear: {
    description: 'ล้างคิว',
    errorTitle: 'ข้อผิดพลาด',
    noSongPlaying: 'ไม่มีเพลงกำลังเล่นอยู่ในขณะนี้!',
    queueClearedTitle: 'ล้างคิวแล้ว',
    queueClearedDescription: 'คิวถูกล้างแล้ว.'
  },
  autoplay: {
    description: 'สลับการเล่นอัตโนมัติ',
    errorTitle: 'ข้อผิดพลาด',
    noSongPlaying: 'ไม่มีเพลงกำลังเล่นอยู่ในขณะนี้!',
    autoplayToggledTitle: 'สลับการเล่นอัตโนมัติแล้ว',
    autoplayStatus: 'การเล่นอัตโนมัติ',
    enabled: 'เปิดใช้งานแล้ว',
    disabled: 'ปิดใช้งานแล้ว'
  },
  addsong: {
    description: 'เพิ่มเพลงไปยังเพลย์ลิสต์',
    playlistDesc: 'ชื่อเพลย์ลิสต์',
    songDesc: 'URL หรือชื่อเพลง',
    errorAccess: 'เกิดข้อผิดพลาดขณะเข้าถึงเพลย์ลิสต์.',
    errorNotFound: 'ไม่พบเพลย์ลิสต์หรือคุณไม่ใช่เจ้าของ.',
    errorAdd: 'เกิดข้อผิดพลาดขณะเพิ่มเพลง.',
    successTitle: 'เพิ่มเพลงแล้ว',
    addedSong: 'เพิ่มเพลง',
    toPlaylist: 'ไปยังเพลย์ลิสต์'
  },
  createplaylist: {
    description: 'สร้างเพลย์ลิสต์ใหม่',
    nameDesc: 'ชื่อเพลย์ลิสต์',
    visibilityDesc: 'สาธารณะหรือส่วนตัว',
    error: 'เกิดข้อผิดพลาดขณะสร้างเพลย์ลิสต์.',
    successTitle: 'สร้างเพลย์ลิสต์แล้ว',
    successMessage: 'เพลย์ลิสต์ถูกสร้างเรียบร้อยแล้ว.',
    visibilityLabel: 'การมองเห็น',
    public: 'สาธารณะ',
    private: 'ส่วนตัว'
  },
  deleteplaylist: {
    description: 'ลบเพลย์ลิสต์',
    playlistDesc: 'ชื่อเพลย์ลิสต์ที่จะลบ',
    error: 'เกิดข้อผิดพลาดขณะประมวลผลคำขอ.',
    notFound: 'ไม่พบเพลย์ลิสต์.',
    noPermission: 'คุณไม่มีสิทธิ์ในการลบเพลย์ลิสต์นี้.',
    successTitle: 'ลบเพลย์ลิสต์แล้ว',
    successMessage: 'เพลย์ลิสต์ถูกลบแล้ว'
  },
  playplaylist: {
    description: 'เล่นเพลย์ลิสต์',
    playlistDesc: 'ชื่อเพลย์ลิสต์',
    notInVoiceChannel: 'คุณต้องอยู่ในช่องเสียงเพื่อใช้คำสั่งนี้.',
    error: 'เกิดข้อผิดพลาดขณะเข้าถึงเพลย์ลิสต์.',
    notFound: 'ไม่พบเพลย์ลิสต์.',
    noPermission: 'เพลย์ลิสต์นี้เป็นส่วนตัวและคุณไม่ใช่เจ้าของ.',
    emptyPlaylist: 'เพลย์ลิสต์ว่างเปล่า.',
    successTitle: 'เริ่มเล่นเพลย์ลิสต์แล้ว',
    successMessage: 'เริ่มเล่นเพลย์ลิสต์แล้ว',
    failedToPlay: 'ไม่สามารถเล่นเพลย์ลิสต์ได้.',
  },
  removesong: {
    description: 'ลบเพลงออกจากเพลย์ลิสต์',
    playlistDesc: 'ชื่อเพลย์ลิสต์',
    songDesc: 'URL หรือชื่อเพลง',
    error: 'เกิดข้อผิดพลาดขณะเข้าถึงเพลย์ลิสต์.',
    notFound: 'ไม่พบเพลย์ลิสต์หรือคุณไม่ใช่เจ้าของ.',
    removeError: 'เกิดข้อผิดพลาดขณะลบเพลง.',
    successTitle: 'ลบเพลงแล้ว',
    successMessage: 'ลบเพลง',
    fromPlaylist: 'ออกจากเพลย์ลิสต์',
  },
  showallplaylists: {
    description: 'แสดงเพลย์ลิสต์ทั้งหมด',
    error: 'เกิดข้อผิดพลาดขณะดึงเพลย์ลิสต์.',
    noPlaylists: 'ไม่พบเพลย์ลิสต์.',
    title: 'เพลย์ลิสต์ทั้งหมด',
    page: 'หน้า',
    songs: 'เพลง',
    by: 'โดย',
    visibility: 'การมองเห็น',
    public: 'สาธารณะ',
    private: 'ส่วนตัว',
  },
  showplaylist: {
    description: 'แสดงเพลย์ลิสต์ของคุณ',
    error: 'เกิดข้อผิดพลาดขณะดึงเพลย์ลิสต์ของคุณ.',
    noPlaylists: 'คุณไม่มีเพลย์ลิสต์.',
    title: 'เพลย์ลิสต์ของคุณ',
    page: 'หน้า',
    songs: 'เพลง',
    visibility: 'การมองเห็น',
    public: 'สาธารณะ',
    private: 'ส่วนตัว',
  },
  playlist: {
    errorNotInVoiceChannel: 'คุณต้องอยู่ในช่องเสียงเพื่อใช้คำสั่งนี้.',
    playlistAdded: 'เพลย์ลิสต์ถูกเพิ่มไปยังคิวแล้ว!',
    errorAddingPlaylist: 'เกิดข้อผิดพลาดขณะเพิ่มเพลย์ลิสต์ไปยังคิว.',
    titleError: 'ข้อผิดพลาด',
    titlePlaylistAdded: 'เพลย์ลิสต์ถูกเพิ่มแล้ว',
    pdescription: 'เล่นเพลย์ลิสต์',
  },
  lyrics: {
    description: 'รับเนื้อเพลงของเพลง',
    songDescription: 'เพลงที่ต้องการรับเนื้อเพลง',
    noLyricsFound: 'ไม่พบเนื้อเพลงสำหรับเพลงนั้น.',
  },
  showplaylistsongs: {
    description: 'แสดงเพลงทั้งหมดในเพลย์ลิสต์.',
    playlistDesc: 'ชื่อเพลย์ลิสต์.',
    errorAccess: 'เกิดข้อผิดพลาดขณะเข้าถึงเพลย์ลิสต์.',
    errorNotFound: 'ไม่พบเพลย์ลิสต์.',
    title: 'เพลงในเพลย์ลิสต์',
    noSongs: 'ไม่มีเพลงในเพลย์ลิสต์.',
  },
  playSong: {
    authorName: 'กำลังเล่น..',
    url: 'https://discord.gg/xQF9f9yUEM',
    song: 'เพลง',
    duration: 'ระยะเวลา',
    source: 'แหล่งที่มา'
  },
  addSong: {
    authorName: 'เพิ่มไปยังคิว',
    url: 'https://discord.gg/xQF9f9yUEM',
    addedToQueue: 'เพิ่มไปยังคิว'
  },
  error: {
    authorName: 'แจ้งเตือน!',
    url: 'https://discord.gg/xQF9f9yUEM',
    errorMessage: 'พบข้อผิดพลาด'
  },
  finish: {
    authorName: 'คิวจบแล้ว',
    url: 'https://discord.gg/xQF9f9yUEM',
    description: 'คิวจบแล้ว!'
  },
  disconnect: {
    authorName: 'ตัดการเชื่อมต่อแล้ว',
    url: 'https://discord.gg/xQF9f9yUEM',
    description: 'ตัดการเชื่อมต่อจากช่องเสียงแล้ว'
  },
  empty: {
    authorName: 'ช่องว่างเปล่า',
    url: 'https://discord.gg/xQF9f9yUEM',
    description: 'ช่องเสียงว่างเปล่า กำลังออกจากช่อง.'
  }
};
