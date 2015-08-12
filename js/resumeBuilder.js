var bio = {
  "name" : "Shane Thompson",
  "role" : "Web Developer",
  "contacts" : {
    "mobile" : "<a href='tel:7249718455'>724-971-8455</a>",
    "email" : "<a href='mailto:shanet80@gmail.com'>shanet80@gmail.com</a>",
    "github" : "<a href='https://github.com/shanet80'>shanet80</a>",
    "twitter" : "<a href='https://twitter.com/shanet80'>@shanet80</a>",
    "location" : "New Castle, PA"
  },
  "skills" : [
    "HTML", "CSS",  "JavaScript", "Bootstrap", "Python", "Java",
    "VB.NET", "C#", "C/C++", "R", "Visual Studio", "Eclipse",
    "Customer Service", "Communications"
  ],
  "biopic": "images/fry.jpg",
  "welcomeMessage" : "Welcome to my interactive resume"
};

var work = {
  "jobs": [
    {
      "employer": "Liberty Mutual Insurance",
      "title": "Customer Service Representative",
      "datesWorked": "March 2015 - Present",
      "location": "New Castle, PA",
      "description": "<ul><li>Counsel and service policy holders in making changes to their existing policies for Home, Auto and Liability</li> <li>Educate customers on additional lines of coverage which may be beneficial to them</li> <li>Collaborated on several problem solving and pilot programs to increase process efficiency</li> <li>Provided thorough customer service leading to first call resolution far exceeding center average</li></ul>"
    },
    {
      "employer": "Randstad",
      "title": "Unlicensed Billing Specialist at Liberty Mutual",
      "datesWorked": "October 2014 - March 2015",
      "location": "New Castle, PA",
      "description": "<ul><li>Communicated information clearly and accurately</li> <li>Provided service for policy holders making payments and with third party changes</li> <li>Awarded multiple customer commendations</li></ul>"
    },
    {
      "employer" : "AT&T",
      "title": "Telecommunications Relay Associate",
      "datesWorked": "October 2003 - June 2014",
      "location": "New Castle, PA",
      "description": "<ul><li>Awarded 4 customer commendations within the first year</li> <li>Transcribe live telephone conversations for the hearing impaired</li> <li>Received continuous customer service training</li></ul>"
    }
  ]
};

var education = {
  "schools":[
    {
      "name": "University of Phoenix",
      "datesAttended": "2013 - Anticipated 2016",
      "degree": "Bachelor of Science",
      "major": "Information Technology",
      "location": "Phoenix, AZ",
      "description": "Classes in Business Systems Included team assignments in each class to simulate working environments"
    },
    {
      "name" : "University of Phoenix",
      "datesAttended": "2014 - 2015",
      "degree": "Certificate",
      "major": "Advanced Software Engineering",
      "location":"Phoenix, AZ",
      "description": "Classes in Java, Software Engineering, Software Architecture, VB.Net, and C#. Included team assignments ranging from creating application design documentation to developing a full working customer relation management application as a team."
    },
    {
      "name": "University of Phoenix",
      "datesAttended": "2013 - 2014",
      "degree": "Associates of Arts",
      "major": "Information Technology with Specialization in Programming",
      "location": "Phoenix, AZ",
      "description": "Included classes in Java, C++, and Web Design"
    }
  ],
  "onlineCourses": [
    {
      "title": "Front-End Developer Nanodegree",
      "school": "Udacity",
      "completed": "2015",
      "url": "https://www.udacity.com"
    },
    {
      "title": "R Programming",
      "school": "Coursera - Johns Hopkins",
      "completed": "May 2015",
      "url": "https://www.coursera.org/account/accomplishments/records/t2mZP7YPCXmdtVyQ"
    }
  ]
};

bio.display = function(){
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
  var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

  var formattedContactInfo = [];
  formattedContactInfo.push(HTMLmobile.replace("%data%", bio.contacts.mobile));
  formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
  formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
  formattedContactInfo.push(HTMLtwitter.replace("%data%", bio.contacts.twitter));


  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);
  $("#header").append(formattedBioPic);
  $("#header").append(formattedWelcomeMsg);

  if(bio.skills.length > 0) {
  	$("#header").append(HTMLskillsStart);

  	for(i in bio.skills) {
  		$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
  	}
  }

  for(i in formattedContactInfo) {
  	$("#topContacts").append(formattedContactInfo[i]);
  	$("#footerContacts").append(formattedContactInfo[i]);
  }
}

work.display = function() {

	if(work.jobs.length > 0) {

		$("#workExperience").append(HTMLworkStart);

		for(i in work.jobs) {
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
			var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
			var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
			var formattedDatesWorked = HTMLworkDates.replace("%data%", work.jobs[i].datesWorked);
			var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

			var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;

			$(".work-entry:last").append(formattedEmployerWorkTitle);
			$(".work-entry:last").append(formattedWorkLocation);
			$(".work-entry:last").append(formattedDatesWorked);
			$(".work-entry:last").append(formattedWorkDescription);
		}
	}
}

education.display = function() {
	if(education.schools.length > 0 || education.onlineCourses.length > 0) {
		for(i in education.schools) {
			$("#education").append(HTMLschoolStart);

			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].datesAttended);
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);
      var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);

			$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
			$(".education-entry:last").append(formattedSchoolDates);
			$(".education-entry:last").append(formattedSchoolMajor);
      $(".education-entry:last").append(formattedSchoolLocation);
		}

		if(education.onlineCourses.length > 0) {
			$("#education").append(HTMLonlineClasses);
			for(i in education.onlineCourses) {
				$("#education").append(HTMLschoolStart);
				var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("#", education.onlineCourses[i].url);
				var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
				var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].completed);
				var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url);

				$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
				$(".education-entry:last").append(formattedOnlineDates);
				$(".education-entry:last").append(formattedOnlineURL);
			}
		}

	}
}

function inName() {
    var name = $("#name").html();
    name = name.trim().split(" ");
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
    name[1] = name[1].toUpperCase();
    return name[0] + " " + name[1];
}

bio.display();
work.display();
education.display();

$('#main').append(internationalizeButton);
$('#mapDiv').append(googleMap);
