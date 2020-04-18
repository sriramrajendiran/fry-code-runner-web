require 'sneakers'
#noinspection RubyResolve
puts "****** SNEAKERS **********"
Sneakers.configure(:heartbeat => 30,
                   :amqp => 'amqp://guest:guest@rabbitmq:5672',
                   :vhost => '/',
                   :exchange => 'sneakers',
                   :exchange_type => :direct)
