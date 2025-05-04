import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

const teamMembers = [
  {
    id: 1,
    name: "M. Altaruzzaman Opu",
    role: "Addressor",
    bio: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed labore et dolore magna aliqua.",
    image: "",
    linkedin: "#",
    facebook: "#",
  },
  {
    id: 2,
    name: "Md. Emam Hossain Emu",
    role: "Joint Addressor",
    bio: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed labore et dolore magna aliqua.",
    image: "",
    linkedin: "#",
    facebook: "#",
  },
  {
    id: 3,
    name: "Hamidur Rahman Shahin",
    role: "Member Secretary",
    bio: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed labore et dolore magna aliqua.",
    image: "",
    linkedin: "#",
    github: "#",
  },
  {
    id: 4,
    name: "Nurul Alam",
    role: "Organizer",
    bio: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed labore et dolore magna aliqua.",
    image: "",
    linkedin: "#",
    x: "#",
  },
  {
    id: 5,
    name: "Joy Barua",
    role: "Co-Ordinator",
    bio: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed labore et dolore magna aliqua.",
    image: "",
    linkedin: "#",
    x: "#",
  },
  {
    id: 6,
    name: "Shahidul Islam",
    role: "Member (Programming)",
    bio: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed labore et dolore magna aliqua.",
    image: "",
    linkedin: "#",
    twitter: "#",
  },
  {
    id: 7,
    name: "K M Fahim",
    role: "Member (Press & Publicity)",
    bio: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed labore et dolore magna aliqua.",
    image: "",
    linkedin: "#",
    twitter: "#",
  },
  {
    id: 8,
    name: "Shahidul Ali",
    role: "Member (Press & Publicity)",
    bio: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed labore et dolore magna aliqua.",
    image: "",
    linkedin: "#",
    twitter: "#",
  },
  {
    id: 9,
    name: "Abu Sayed Md. Zihad",
    role: "Member (IT)",
    bio: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed labore et dolore magna aliqua.",
    image: "",
    linkedin: "#",
    twitter: "#",
  },
];

const TeamPage = () => {
  return (
    <div className="bg-background">
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="text-4xl font-bold text-foreground sm:text-5xl sm:tracking-tight lg:text-6xl mb-2">
            Our Team
          </div>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            Meet the talented individuals behind our innovative AI solutions.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-foreground/10 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-80 w-full">
                <Image
                  src={member.image || "/images/team_placeholder.jpeg"}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground">
                  {member.name}
                </h3>
                <p className="text-indigo-600 font-medium">{member.role}</p>
                <p className="mt-3 text-gray-600">{member.bio}</p>
                <div className="mt-4 flex space-x-4">
                  {member.facebook && (
                    <Link
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-indigo-500"
                    >
                      <FaFacebook />
                    </Link>
                  )}
                  {member.x && (
                    <Link
                      href={member.x}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-500"
                    >
                      <FaX />
                    </Link>
                  )}
                  {member.linkedin && (
                    <Link
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-indigo-500"
                    >
                      <FaLinkedin />
                    </Link>
                  )}
                  {member.github && (
                    <Link
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-gray-900"
                    >
                      <FaGithub />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-foreground">Join Our Team</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
            We&apos;re always looking for talented individuals to join our team.
            Check out our current openings.
          </p>
          <div className="mt-6">
            <Link
              href="/careers"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              View Open Positions
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
