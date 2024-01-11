export interface SusCommentsRoot {
  ban_comment: boolean
  ban_comment_reason: string
  ban_comment_toast: string
  ban_face: boolean
  ban_gif_suggest: number
  ban_pic_comment: number
  bottom_tips: any
  data: Daum[]
  detail_no_comment: number
  enter_comment_info: EnterCommentInfo
  err_no: number
  exempt: boolean
  extensions: any
  fold_comment_count: number
  go_topic_detail: number
  group: Group
  guide_info: any
  has_more: boolean
  media_comment: any
  media_comment_enable: boolean
  media_comment_has_more: boolean
  media_comment_total_num: number
  message: string
  next_comment_since_ts: number
  offset: number
  placeholder: string
  post_count: number
  prompt: any
  repost_params: RepostParams
  show_add_forum: number
  stable: boolean
  stick_comments: any[]
  stick_has_more: boolean
  stick_toast: number
  stick_total_number: number
  super_digg_control: any
  tab_info: TabInfo
  total_number: number
  total_number_desc: string
}

export interface Daum {
  ad: any
  cell_type: number
  comment: Comment
  embedded_data: any
  feed_user_description: FeedUserDescription
  forum_card: any
  god_commentator: boolean
  high_quality_comment: boolean
  id: number
  is_brilliant_comment: number
  medal_info: MedalInfo2[]
  motor_auth_show_info: MotorAuthShowInfo2
  motor_identity_info: MotorIdentityInfo
  motor_is_accepted: boolean
  motor_is_selected: boolean
  motor_user_info: MotorUserInfo
}

export interface Comment {
  aid: number
  auth_verified_info: string
  author_act_badge: any
  author_badge: any[]
  author_badge_night: any[]
  band_name: string
  band_url: string
  bury_count: number
  comment_badge: any
  comment_badge_night: any
  comment_tag_url: string
  content_rich_span: string
  couplet_sticker: any
  create_time: number
  digg_bury_style: number
  digg_count: number
  dislike_style: number
  forward_count: number
  has_author_digg: number
  has_multi_media: boolean
  id: number
  id_str: string
  interact_style: number
  is_blocked: number
  is_blocking: number
  is_first_comment: number
  is_followed: number
  is_following: number
  is_loyal_fan: number
  is_pgc_author: number
  is_repost: boolean
  large_image_list: any[]
  media_info: MediaInfo
  membership_status: number
  multi_media: any
  new_reply_list: NewReplyList[]
  pendants: any
  platform: string
  publish_loc_info: string
  reaction_info: any
  remark_name: string
  reply_count: number
  reply_list: ReplyList[]
  reply_max_show: number
  score: number
  show_tags: number
  source: any
  standard_user_info: string
  star_comment_info: StarCommentInfo2
  support_react_list: any
  tags: any
  text: string
  thumb_image_list: any[]
  user_auth_info: string
  user_bury: number
  user_circle_grade: UserCircleGrade2
  user_decoration: string
  user_digg: number
  user_id: number
  user_name: string
  user_profile_image_url: string
  user_relation: number
  user_super_digg: number
  user_verified: boolean
  user_widget_url: string
  verified_reason: string
  vote_info: any
  xg_badge_type: number
}

export interface MediaInfo {
  avatar_url: string
  name: string
}

export interface NewReplyList {
  bury_count: number
  content: string
  content_rich_span: string
  create_time: number
  digg_bury_style: number
  digg_count: number
  dislike_style: number
  forward_count: number
  group: any
  has_author_digg: number
  has_multi_media: boolean
  id: number
  id_str: string
  is_owner: boolean
  large_image_list: any[]
  multi_media: any
  publish_loc_info: string
  reaction_info: any
  reply_badge: any
  reply_badge_night: any
  repost_params: any
  star_comment_info: StarCommentInfo
  support_react_list: any
  text: string
  thumb_image_list: any[]
  user: User
  user_bury: boolean
  user_digg: boolean
  user_super_digg: number
}

export interface StarCommentInfo {
  has_recommend: boolean
  is_open: boolean
  is_star_comment: boolean
}

export interface User {
  auth_verified_info: string
  author_badge: AuthorBadge[]
  author_badge_night: AuthorBadgeNight[]
  avatar_url: string
  band_name: string
  band_url: string
  description: string
  interact_style: number
  is_blocked: boolean
  is_blocking: boolean
  is_followed: boolean
  is_following: boolean
  is_pgc_author: boolean
  membership_status: number
  name: string
  pendants: any
  screen_name: string
  user_auth_info: string
  user_decoration: string
  user_id: number
  user_relation: number
  user_verified: boolean
  verified_reason: string
}

export interface AuthorBadge {
  height: number
  image_des: string
  open_url: string
  position: number
  scene: number
  tag_type: number
  uri: string
  url: string
  url_list: UrlList[]
  width: number
}

export interface UrlList {
  url: string
}

export interface AuthorBadgeNight {
  height: number
  image_des: string
  open_url: string
  position: number
  scene: number
  tag_type: number
  uri: string
  url: string
  url_list: UrlList2[]
  width: number
}

export interface UrlList2 {
  url: string
}

export interface ReplyList {
  auth_verified_info: string
  author_badge: AuthorBadge2[]
  author_badge_night: AuthorBadgeNight2[]
  band_name: string
  band_url: string
  bury_count: number
  content_rich_span: string
  create_time: number
  digg_count: number
  god_commentator: boolean
  has_author_digg: number
  has_multi_media: boolean
  id: number
  id_str: string
  is_blocked: number
  is_blocking: number
  is_following: boolean
  is_pgc_author: number
  large_image_list: any[]
  medal_info?: MedalInfo[]
  membership_status: number
  motor_auth_show_info: MotorAuthShowInfo
  multi_media: any
  pendants: any
  publish_loc_info: string
  standard_user_info: string
  text: string
  thumb_image_list: any[]
  user_auth_info: string
  user_bury: number
  user_circle_grade: UserCircleGrade
  user_digg: number
  user_id: number
  user_name: string
  user_profile_image_url: string
  user_super_digg: number
  user_verified: boolean
  user_widget_url: string
}

export interface AuthorBadge2 {
  height: number
  image_des: string
  open_url: string
  position: number
  scene: number
  tag_type: number
  uri: string
  url: string
  url_list: UrlList3[]
  width: number
}

export interface UrlList3 {
  url: string
}

export interface AuthorBadgeNight2 {
  height: number
  image_des: string
  open_url: string
  position: number
  scene: number
  tag_type: number
  uri: string
  url: string
  url_list: UrlList4[]
  width: number
}

export interface UrlList4 {
  url: string
}

export interface MedalInfo {
  desc: string
  desc_bg_color: string
  desc_color: string
  id: number
  level: number
  pic_url: string
  schema: string
  type: number
}

export interface MotorAuthShowInfo {
  auth_v_desc: string
  auth_v_type: number
}

export interface UserCircleGrade {
  amount: number
  level: number
  icon: string
  color: string
  rank_icon: string
  rank_desc: string
  rank_weeks: number
}

export interface StarCommentInfo2 {
  has_recommend: boolean
  is_open: boolean
  is_star_comment: boolean
}

export interface UserCircleGrade2 {
  amount: number
  level: number
  icon: string
  color: string
  rank_icon: string
  rank_desc: string
  rank_weeks: number
}

export interface FeedUserDescription {
  icon: string
  description: string
  desc_type?: number
}

export interface MedalInfo2 {
  desc: string
  desc_bg_color: string
  desc_color: string
  id: number
  level: number
  pic_url: string
  schema: string
  type: number
}

export interface MotorAuthShowInfo2 {
  answer_ans_num: number
  answer_digg_num: number
  answer_invited_num: number
  answer_medal_desc_url: string
  answer_medal_url: string
  auth_v_desc: string
  auth_v_type: number
  car_identity_desc: string
  car_identity_logo?: string
}

export interface MotorIdentityInfo {
  ans_num: number
  answerer_identity_desc: string
  answerer_medal_url: string
  car_identity_desc: string
  cheyou_master_identity_desc: string
  digg_num: number
  identity: string
  identity_desc: string
  invited_num: number
  schema: string
}

export interface MotorUserInfo {
  verify_car?: string
  schema: string
}

export interface EnterCommentInfo {
  err_no: number
  toast_text: string
}

export interface Group {
  content: string
  content_rich_span: string
  description: string
  is_video: boolean
  open_url: string
  user_id: number
  user_name: string
}

export interface RepostParams {
  cover_url: string
  fw_id: number
  fw_id_type: number
  fw_user_id: number
  opt_id: number
  opt_id_type: number
  repost_type: number
  schema: string
  title: string
}

export interface TabInfo {
  current_tab_index: number
  tabs: string[]
}


export interface ContentRichSpanRoot {
  image_list: any[]
  links: Link[]
}

// export interface ImageList {
//   any: MotorArticleImg78bf731ee5fb45c7ac545f9d21358398
// }
//

export interface MotorArticleImg {
  height: number
  type: number
  uri: string
  url: string
  url_list: UrlList[]
  width: number
}

export interface UrlList {
  url: string
}

export interface Link {
  start: number
  length: number
  link: string
  type: number
  text: string
  id: number
  id_type: number
  flag: number
  image: Image[]
}

export interface Image {
  u: string
  w: number
  h: number
  f: string
}
