# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Movie.create({name:"Alien", director:"Ridley Scott", release_year:"1979", description:"After a space merchant vessel receives an unknown transmission as a distress call, one of the crew is attacked by a mysterious life form and they soon realize that its life cycle has merely begun.", upvotes:0, downvotes:0})

Movie.create({name: "Pink Panther", director:"Shawn Levy", release_year:"2006", description:"Before thousands of enthusiastic spectators at the World Cup semi-finals between France and China, an elusive professional assassin murders the famous French coach, and manages, somehow, to steal from his hand his prized possession--the priceless Pink Panther diamond ring. Now, of all the Parisian Police Force's detectives, the deceitful Chief Inspector, Dreyfus, decides to appoint the maladroit investigator, Jacques Clouseau, to this difficult and mysterious case, knowing that the eccentric gendarme is way out of his depth. Does Dreyfus have a hidden agenda? Can France's clueless and most bumbling officer of the law piece together the scarce leads to pull off a surprising success?", upvotes:0, downvotes:0})
