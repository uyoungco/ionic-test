export interface CheyouDetailRoot {
  prompts: string
  status: number
  message: string
  data: Data
}

export interface Data {
  user_info: UserInfo
  article_type: number
  article_sub_type: number
  group_id: number
  group_id_str: string
  group_source: number
  image_urls: any
  vid: string
  video_duration: number
  video_play_info: string
  created_time: number
  log_pb: LogPb
  motor_title: string
  thread_title: string
  content: string
  cover_list: CoverList[]
  motor_car_info: MotorCarInfo
  motor_profile_info: MotorProfileInfo
  read_count: number
  comment_count: number
  comment_count_desc: string
  share_count: number
  digg_count: number
  user_digg: number
  bury_count: number
  user_bury: number
  motor_cover_info: MotorCoverInfo
  share_info: ShareInfo
  is_collect: boolean
  activity_info: ActivityInfo
  question_info: any
  motor_car_tag_info: any
  follow_activity: boolean
  content_rich_span: any
  motor_series_info: MotorSeriesInfo
  relation_info: RelationInfo
  motor_ad_info: MotorAdInfo
  guide_video_info: any
  motor_koubei_info: any
  motor_link_info: any
  motor_repost_info: MotorRepostInfo
  product_list: any
  poi_list: any
  guide_video_series_info_info: any
  selected_status: number
  operation_status: number
  stamp_info: any
  dealer_info: any
  series_clue_card: any
  business_activity_info: any
  community_topic_card: any
  stick_infos: any
  related_series_info: any
  user_digg_list: any
  top_content_tag: TopContentTag[]
  series_info: any
  selected_level: any
  selected_tips: string
  content_attitude: ContentAttitude
  content_estimation: any
  catalog: any
  vote_info: any
  wiki_relation_articles: any
  owner_price_digg_info: any
  is_agent_user: boolean
  agent_info: any
  trade_info: any
  video_style: number
  motor_community_entrance: MotorCommunityEntrance[]
  series_comment: any
  series_page_schema: string
  comment_guide_text: string
  ab_test_param: any
  dislike_info: any
  quality_feedback_info: QualityFeedbackInfo
  car_review: any
  top_30_videos: any
  sh_collect_videos: any
  reedite: any
  topic_info: any
  eval_info: any
  search_schema: string
  enter_from: string
  gid_type: number
  top_bar_info: any
  car_base_info: CarBaseInfo
  bottom_tag_list: any
  ab_fields: AbFields
  small_video_act_config: any
  ugc_publish_item: any
  small_video_resource: any
  owner_price_info: any
  extend_info_map: any
  key_frames: any
  label: any
  publish_loc_info: string
  music_info: any
  related_link_series_info: any[]
  im_entrance: any
  energy_share_params: any
  open_url: string
  common_resource: any
  hot_topic_info: any
}

export interface UserInfo {
  user_id: number
  name: string
  avatar_url: string
  user_info_str: string
  show_myself_level: number
  is_cheyou_master: boolean
}

export interface LogPb {
  impr_id: string
}

export interface CoverList {
  img_type: number
  uri: string
  url: string
  height: number
  width: number
}

export interface MotorCarInfo {
  motor_id: number
  motor_type: number
  series_id: number
  series_name: string
  schema: string
  source_desc: string
  motor_name: string
  img_url: string
  price: string
  has_update: boolean
  sub_title: string
  link_text: string
  community_icon: string
  show_series_page_entrance: boolean
  unread_count: number
  unread_count_tips: string
  score: number
}

export interface MotorProfileInfo {
  standard_user_info: string
  schema: string
  subscribed: number
  fans_count: number
  user_id: number
  name: string
  media_id: number
  ugc_publish_media_id: number
  avatar_url: string
  user_verified: number
  car_owner_info: CarOwnerInfo
  motor_identity_info: MotorIdentityInfo
  motor_auth_show_info: MotorAuthShowInfo
  medal_list: MedalList[]
  live_info: any
  user_widget_url: string
  user_widget_type: string
  user_widget_corner: string
  user_circle_grade: UserCircleGrade
  feed_user_description: FeedUserDescription
  douyin_uid: number
  avatar_background: string
}

export interface CarOwnerInfo {
  car_id: number
  car_name: string
  desc: string
}

export interface MotorIdentityInfo {
  schema: string
  identity: string
  identity_desc: string
  ans_num: number
  digg_num: number
  invited_num: number
  car_identity_desc: string
  answerer_identity_desc: string
  cheyou_master_identity_desc: string
  answerer_medal_url: string
  answerer_medal_pop_url: string
  medal_desc_url: string
}

export interface MotorAuthShowInfo {
  auth_v_type: number
  auth_v_desc: string
  answer_digg_num: number
  answer_ans_num: number
  answer_invited_num: number
  answer_medal_url: string
  answer_medal_desc_url: string
  car_identity_desc: string
}

export interface MedalList {
  id: number
  level: number
  icon_url: string
  desc: string
  desc_color: string
  desc_bg_color: string
  schema: string
  pic_url: any
  type: number
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

export interface FeedUserDescription {
  icon: string
  description: string
  desc_type: number
}

export interface MotorCoverInfo {
  img_type: number
  uri: string
  url: string
  height: number
  width: number
}

export interface ShareInfo {
  share_image: string
  title: string
  share_url: string
  share_text: string
  weixin_special_type: number
  weixin_share_schema: string
  share_wx_type: number
}

export interface ActivityInfo {
  name: string
  activity_id: number
  schema_url: string
  publisher_schema: string
}

export interface MotorSeriesInfo {
  motor_id: number
  motor_type: number
  series_id: number
  series_name: string
  schema: string
  source_desc: string
  motor_name: string
  img_url: string
  price: string
  has_update: boolean
  sub_title: string
  link_text: string
  community_icon: string
  show_series_page_entrance: boolean
  unread_count: number
  unread_count_tips: string
  score: number
}

export interface RelationInfo {
  id: number
  id_type: string
  title: string
  sub_title: string
  img_url: string
  open_url: string
  origin_url: string
  style: number
}

export interface MotorAdInfo {
  poi_ad_info: any
}

export interface MotorRepostInfo {
  title: string
  image_url: string
  item_id: number
  item_id_str: string
  scheme: string
  ui_style: number
  name: string
  sync_thread: boolean
  community_info: CommunityInfo
}

export interface CommunityInfo {
  open_url: string
  motor_id: number
  motor_name: string
  motor_type: number
}

export interface TopContentTag {
  type: number
  tag_id: number
  text: string
  open_url: string
  series_id: number
  series_new_energy_type: number
}

export interface ContentAttitude {
  is_hit: boolean
  level_attitude_des: LevelAttitudeDe[]
  question: string
  score: number
  tags: any
  can_show_nps: boolean
  count: number
  video_nps_style: number
  appearance_style: number
  can_customize: boolean
  attitude_content: string
  can_show_small_video_nps: boolean
}

export interface LevelAttitudeDe {
  level: number
  desc: string
  tags: string[]
}

export interface MotorCommunityEntrance {
  community_info: CommunityInfo2
  user_list: UserList[]
  count_info: CountInfo
  article_list: any[]
}

export interface CommunityInfo2 {
  community_source_merchant: string
  cover_icon: string
  cover_uri: string
  cover_url: string
  curr_grade: string
  icon_url: string
  link_text: string
  mine_page_schema: string
  motor_id: string
  motor_name: string
  motor_type: string
  myself_str: string
  next_grade: string
  schema: string
  series_id: string
  series_name: string
  series_new_energy_type: string
  series_page_schema: string
}

export interface UserList {
  avatar_url: string
  user_id: string
  user_name: string
  user_schema: string
}

export interface CountInfo {
  user_amount: UserAmount
}

export interface UserAmount {
  count: number
  desc: string
}

export interface QualityFeedbackInfo {
  status: number
  intro: string
  icon_url: string
  icon_schema: string
  bar_schema: string
  top_bar_schema_list: TopBarSchemaList[]
  feedback_detail: any
  need_user_operate: boolean
}

export interface TopBarSchemaList {
  content: string
  schema: string
}

export interface CarBaseInfo {
  series_id: number
  series_name: string
  brand_id: number
  brand_name: string
}

export interface AbFields {}
