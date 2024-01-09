export interface CheYouListRoot {
  prompts: string
  status: number
  message: string
  data: Data
}

export interface Data {
  cheyou_list: CheyouList[]
  next_offset: number
  count: number
  total_count: number
  has_more: boolean
}

export interface CheyouList {
  gid: number
  gid_str: string
  title: string
  thread_title: string
  content: string
  digg_count: number
  comment_count: number
  bury_count: number
  read_count: number
  user_digg: boolean
  user_bury: boolean
  is_collect: boolean
  profile_info: ProfileInfo
  ugc_question_info: UgcQuestionInfo
  article_type: number
  article_sub_type: number
  create_time: number
  latest_comment_time: number
  comment_data: any[]
  selected_level: number
  video_detail_info: VideoDetailInfo
  image_urls: ImageUrl[]
  car_info: any
  car_view_info: any
  link_info: LinkInfo
  display_time: number
  activity_info?: ActivityInfo
  community_info: CommunityInfo2
}

export interface ProfileInfo {
  standard_user_info: string
  schema: string
  subscribed: number
  fans_count: number
  user_id: number
  user_id_str: string
  name: string
  media_id: number
  ugc_publish_media_id: number
  avatar_url: string
  user_verified: number
  car_owner_info: any
  motor_identity_info: any
  motor_auth_show_info: MotorAuthShowInfo
  user_circle_grade: any
  is_follow: boolean
  user_description_list: UserDescriptionList[]
  medal_list: MedalList[]
  dynamic_count: number
  essence_count: number
  digg_count: number
  comment_count: number
  follow_count: number
  dynamic_count_en: string
  essence_count_en: string
  digg_count_en: string
  comment_count_en: string
  follow_count_en: string
}

export interface MotorAuthShowInfo {
  auth_v_type: number
  auth_v_desc: string
}

export interface UserDescriptionList {
  icon: string
  description: string
  desc_type: number
  width: number
  height: number
}

export interface MedalList {
  id: number
  user_id: number
  type: number
  level: number
  desc_content: string
  status: number
  create_time: number
  modify_time: number
  expire_time: number
  upgrade_time: number
  show_start_time: number
  show_end_time: number
  icon_url: string
  empathy: string
  extra: Extra
  pic_url: string
}

export interface Extra {
  color: string
  bg_color: string
  schema: string
  small_image: string
}

export interface UgcQuestionInfo {
  status: number
  status_display: string
  send_award: string
  award_icon_url: string
  adopted_id: number
  answer_url: string
}

export interface VideoDetailInfo {
  cover_url: string
  video_id: string
  video_type: number
  video_duration: number
  video_size: any
}

export interface ImageUrl {
  url: string
  width: number
  url_list: any
  uri: string
  height: number
  type: any
}

export interface LinkInfo {
  user_id: number
  user_id_str: string
  title: string
  image_url: string
  item_id: number
  item_id_str: string
  scheme: string
  ui_style: number
  name: string
  community_info: CommunityInfo
  article_type: number
}

export interface CommunityInfo {
  open_url: string
  motor_id: number
  motor_id_str: string
  motor_name: string
  motor_type: number
}

export interface ActivityInfo {
  name: string
  activity_id: number
  activity_id_str: string
  schema_url: string
}

export interface CommunityInfo2 {
  open_url: string
  motor_id: number
  motor_id_str: string
  motor_name: string
  motor_type: number
}