export enum EResourceType {
  Document = "document",
  Image = "image",
  Audio = "audio",
  Video = "video",
  Archives = "archives",
  Other = "other",
}

export enum EDocumentExts {
  Pdf = "pdf",
  Doc = "doc",
  Docx = "docx",
  Xls = "xls",
  Xlsx = "xlsx",
  Ppt = "ppt",
  Pptx = "pptx",
  Txt = "txt",
  Rtf = "rtf",
  Csv = "csv",
  Md = "md",
}

export enum EImageExts {
  Jpg = "jpg",
  Jpeg = "jpeg",
  Png = "png",
  Gif = "gif",
  Webp = "webp",
  Svg = "svg",
  Bmp = "bmp",
  Tiff = "tiff",
}

export enum EAudioExts {
  Mp3 = "mp3",
  Wav = "wav",
  Ogg = "ogg",
  Flac = "flac",
  Aac = "aac",
  M4a = "m4a",
}

export enum EVideoExts {
  Mp4 = "mp4",
  Avi = "avi",
  Mov = "mov",
  Mkv = "mkv",
  Webm = "webm",
  Flv = "flv",
}

export enum EArchivesExts {
  Zip = "zip",
  Rar = "rar",
  SevenZip = "7z",
  Tar = "tar",
  Gzip = "gz",
}

export enum EOtherExts {
  Json = "json",
  Xml = "xml",
  Yaml = "yaml",
  Yml = "yml",
}

export const ResourceExtensions = {
  [EResourceType.Document]: EDocumentExts,
  [EResourceType.Image]: EImageExts,
  [EResourceType.Audio]: EAudioExts,
  [EResourceType.Video]: EVideoExts,
  [EResourceType.Archives]: EArchivesExts,
  [EResourceType.Other]: EOtherExts,
};

export type TMultyResExts =
  | EDocumentExts
  | EImageExts
  | EAudioExts
  | EVideoExts
  | EArchivesExts
  | EOtherExts;
