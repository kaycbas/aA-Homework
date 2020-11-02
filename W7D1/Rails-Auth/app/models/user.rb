class User < ApplicationRecord
    validates :username, :session_token, presence: true
    validates :password_digest, presence: { message: 'Password can\'t be blank' }
    validates :password_digest, length: { minimum: 6, allow_nil: true }
    before_validation :ensure_session_token

    def self.find_by_credentials(un, pw)
        user = self.where(username: un)
        return user if user && BCrypt::Password.new(password_digest).is_password?(pw)
        nil
    end

    def self.generate_session_token
        SecureRandom::urlsafe_base64(16)
    end

    def reset_session_token!
        self.session_token = self.class.generate_session_token
        self.save!
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= self.class.generate_session_token
    end

    def password=(pw)
        @password = pw
        self.password_digest = BCrypt::Password.create(pw)
    end
end
