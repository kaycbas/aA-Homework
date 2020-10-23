class Artist < ApplicationRecord
  has_many :albums,
    class_name: 'Album',
    foreign_key: :artist_id,
    primary_key: :id

  def n_plus_one_tracks
    albums = self.albums
    tracks_count = {}
    albums.each do |album|
      tracks_count[album.title] = album.tracks.length
    end

    tracks_count
  end

  def better_tracks_query
    # TODO: your code here
    albums_with_track_counts = self
      .albums
      .select('albums.*, COUNT(*) AS track_count')
      .joins(:tracks)
      .group('albums.id')

    album_counts = {}
    albums_with_track_counts.each do |album|
      album_counts[album.title] = album.track_count
  end
end
