const response = [{
    "id": "1xxxxx",
    "name": "hvvXxxxx",
    "org_id": "1xxx",
    "topics": ["hue", "right", "left"]
  },
  {
    "id": "2xxxxx",
    "name": "hvvXxxxxwww",
    "org_id": "1xxx",
    "topics": ["sss", "sds"]
  }
];

console.log
(
response.map
(i => 
(
{
  "org_id": i.org_id,
  "topics": i.topics
}
)
)
);