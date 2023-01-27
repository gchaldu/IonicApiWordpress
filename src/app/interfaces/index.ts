/* eslint-disable @typescript-eslint/naming-convention */
export interface RespuestaTopHeadLines {
    id:             number;
    date:           Date;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    date_gmt:       Date;
    guid:           GUID;
    modified:       Date;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    modified_gmt:   Date;
    slug:           string;
    status:         Status;
    type:           RespuestaTopHeadLineType;
    link:           string;
    title:          GUID;
    content:        Content;
    excerpt:        Content;
    author:         number;
    featured_media: number;
    comment_status: CommentStatus;
    ping_status:    PingStatus;
    sticky:         boolean;
    template:       Template;
    format:         Format;
    meta:           Meta;
    categories:     number[];
    tags:           number[];
    aioseo_notices: any[];
    _links:         RespuestaTopHeadLineLinks;
    _embedded:      Embedded;
}

export interface Embedded {
    author:             EmbeddedAuthor[];
    'wp:featuredmedia': WpFeaturedmedia[];
    'wp:term':          Array<EmbeddedWpTerm[]>;
}

export interface EmbeddedAuthor {
    id:          number;
    name:        SlugEnum;
    url:         string;
    description: string;
    link:        string;
    slug:        SlugEnum;
    avatar_urls: { [key: string]: string };
    _links:      AuthorLinks;
}

export interface AuthorLinks {
    self:       About[];
    collection: About[];
}

export interface About {
    href: string;
}

export enum SlugEnum {
    Guillemarti14 = 'guillemarti14',
}

export interface WpFeaturedmedia {
    id:             number;
    date:           Date;
    slug:           string;
    type:           WpFeaturedmediaType;
    link:           string;
    title:          GUID;
    author:         number;
    aioseo_notices: any[];
    caption:        GUID;
    alt_text:       string;
    media_type:     MediaType;
    mime_type:      MIMEType;
    media_details:  MediaDetails;
    source_url:     string;
    _links:         WpFeaturedmediaLinks;
}

export interface WpFeaturedmediaLinks {
    self:       About[];
    collection: About[];
    about:      About[];
    author:     ReplyElement[];
    replies:    ReplyElement[];
}

export interface ReplyElement {
    embeddable: boolean;
    href:       string;
}

export interface GUID {
    rendered: string;
}

export interface MediaDetails {
    width:      number;
    height:     number;
    file:       string;
    filesize:   number;
    sizes:      Sizes;
    image_meta: ImageMeta;
}

export interface ImageMeta {
    aperture:          string;
    credit:            string;
    camera:            string;
    caption:           string;
    created_timestamp: string;
    copyright:         string;
    focal_length:      string;
    iso:               string;
    shutter_speed:     string;
    title:             string;
    orientation:       string;
    keywords:          any[];
}

export interface Sizes {
    medium:       The1536_X1536;
    large:        The1536_X1536;
    thumbnail:    The1536_X1536;
    medium_large: The1536_X1536;
    full:         The1536_X1536;
    '1536x1536'?: The1536_X1536;
}

export interface The1536_X1536 {
    file:       string;
    width:      number;
    height:     number;
    filesize?:  number;
    mime_type:  MIMEType;
    source_url: string;
}

export enum MIMEType {
    ImagePNG = 'image/png',
}

export enum MediaType {
    Image = 'image',
}

export enum WpFeaturedmediaType {
    Attachment = 'attachment',
}

export interface EmbeddedWpTerm {
    id:       number;
    link:     string;
    name:     string;
    slug:     string;
    taxonomy: Taxonomy;
    _links:   WpTermLinks;
}

export interface WpTermLinks {
    self:           About[];
    collection:     About[];
    about:          About[];
    'wp:post_type': About[];
    curies:         Cury[];
}

export interface Cury {
    name:      CuryName;
    href:      Href;
    templated: boolean;
}

export enum Href {
    HTTPSAPIWOrgRel = 'https://api.w.org/{rel}',
}

export enum CuryName {
    Wp = 'wp',
}

export enum Taxonomy {
    Category = 'category',
    PostTag = 'post_tag',
}

export interface RespuestaTopHeadLineLinks {
    self:                  About[];
    collection:            About[];
    about:                 About[];
    author:                ReplyElement[];
    replies:               ReplyElement[];
    'version-history':     VersionHistory[];
    'predecessor-version': PredecessorVersion[];
    'wp:featuredmedia':    ReplyElement[];
    'wp:attachment':       About[];
    'wp:term':             LinksWpTerm[];
    curies:                Cury[];
}

export interface PredecessorVersion {
    id:   number;
    href: string;
}

export interface VersionHistory {
    count: number;
    href:  string;
}

export interface LinksWpTerm {
    taxonomy:   Taxonomy;
    embeddable: boolean;
    href:       string;
}

export enum CommentStatus {
    Closed = 'closed',
}

export interface Content {
    rendered:  string;
    protected: boolean;
}

export enum Format {
    Standard = 'standard',
}

export interface Meta {
    om_disable_all_campaigns:        boolean;
    _mi_skip_tracking:               boolean;
    'site-sidebar-layout':           SiteLayout;
    'site-content-layout':           SiteLayout;
    'ast-global-header-display':     string;
    'ast-main-header-display':       string;
    'ast-hfb-above-header-display':  string;
    'ast-hfb-below-header-display':  string;
    'ast-hfb-mobile-header-display': string;
    'site-post-title':               string;
    'ast-breadcrumbs-content':       string;
    'ast-featured-img':              string;
    'footer-sml-layout':             string;
    'theme-transparent-header-meta': string;
    'adv-header-id-meta':            string;
    'stick-header-meta':             string;
    'header-above-stick-meta':       string;
    'header-main-stick-meta':        string;
    'header-below-stick-meta':       string;
}

export enum SiteLayout {
    Default = 'default',
}

export enum PingStatus {
    Open = 'open',
}

export enum Status {
    Publish = 'publish',
}

export enum Template {
    ElementorTheme = 'elementor_theme',
    Empty = '',
}

export enum RespuestaTopHeadLineType {
    Post = 'post',
}

export interface NoticiasPorCategoriaYPagina{
    [key: number]: {
        page: number;
        noticias: any[];
    };
}
