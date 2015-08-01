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
    "HTML", "CSS",  "JavaScript", "Python", "Java",
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
      "description": "Agent"
    },
    {
      "employer": "Randstad",
      "title": "Unlicensed Billing Specialist at Liberty Mutual",
      "datesWorked": "October 2014 - March 2015",
      "location": "New Castle, PA",
      "description": "Biller"
    },
    {
      "employer" : "AT&T",
      "title": "Telecommunications Relay Associate",
      "datesWorked": "October 2003 - June 2014",
      "location": "New Castle, PA",
      "description": "Helper of deaf peoples"
    }
  ]
};

var education = {
  "schools":[
    {
      "name": "University of Phoenix",
      "datesAttended": "2013 - Anticipated 2016",
      "degree": "Bachelor of Science",
      "major": "Information Technology"
    },
    {
      "name" : "University of Phoenix",
      "datesAttended": "2014 - 2015",
      "degree": "Certificate",
      "major": "Advanced Software Engineering"
    },
    {
      "name": "University of Phoenix",
      "datesAttended": "2013 - 2014",
      "degree": "Associates of Arts",
      "major": "Information Technology with Specialization in Programming"
    }
  ],
  "onlineCourses": [

  ]
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
// var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

var formattedContactInfo = [];
formattedContactInfo.push(HTMLmobile.replace("%data%", bio.contacts.mobile));
formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
formattedContactInfo.push(HTMLtwitter.replace("%data%", bio.contacts.twitter));


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);
// $("#header").append(formattedWelcomeMsg);

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

function displayWork() {

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

displayWork();

education.display = function() {
	if(education.schools.length > 0 || education.onlineCourses.length > 0) {
		for(i in education.schools) {
			$("#education").append(HTMLschoolStart);

			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].datesAttended);
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);

			$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
			$(".education-entry:last").append(formattedSchoolDates);
			$(".education-entry:last").append(formattedSchoolMajor);
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

education.display();

$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
});

$("#mapDiv").append(googleMap);
